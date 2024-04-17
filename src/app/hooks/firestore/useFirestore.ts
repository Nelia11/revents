import { useCallback, useEffect, useRef } from 'react';
import { useAppDispatch } from '../../store/store';
import { GenericActions } from '../../store/genericSlice';
import { DocumentData, collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';

interface ListenerState {
  name?: string;
  unsubscribe: () => void;
}

export const useFirestore = <T>(path: string) => {
  const listenersRef = useRef<ListenerState[]>([]);

  useEffect(() => {
    let listenerRefValue: ListenerState[] | null = null;

    if (listenersRef.current) {
      listenerRefValue = listenersRef.current;
    }
    return () => {
      if (listenerRefValue) {
        listenerRefValue.forEach((listener) => listener.unsubscribe());
      }
    };
  }, []);

  const dispatch = useAppDispatch();

  const loadCollection = useCallback(
    (actions: GenericActions<T>) => {
      dispatch(actions.loading());

      const query = collection(db, path);

      const listener = onSnapshot(query, {
        next: (querySnapshot) => {
          const data: DocumentData[] = [];
          if (querySnapshot.empty) {
            dispatch(actions.success([] as unknown as T));
            return;
          }
          querySnapshot.forEach((doc) =>
            data.push({ id: doc.id, ...doc.data })
          );
          dispatch(actions.success(data as unknown as T));
        },
        error: (error) => {
          dispatch(actions.error(error.message));
          console.error('Collection error:', error.message);
        },
      });

      listenersRef.current.push({ name: path, unsubscribe: listener });
    },
    [dispatch, path]
  );

  return { loadCollection };
};
