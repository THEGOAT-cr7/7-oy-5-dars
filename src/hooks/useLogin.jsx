import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { toast } from "react-toastify";
import { useState, useCallback } from "react";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = useCallback(
    async (email, password) => {
      setIsPending(true);
      setError(null);

      try {
        if (!email || !password) {
          throw new Error("Iltimos, email va parolni kiriting.");
        }

        const res = await signInWithEmailAndPassword(auth, email, password);
        if (!res.user) {
          throw new Error("Login muvaffaqiyatsiz tugadi.");
        }

        dispatch(
          login({
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
          })
        );

        toast.success(`🎉 Welcome back, ${res.user.email}`);
        return { success: true };
      } catch (err) {
        toast.error(`❌ ${err.message}`);
        setError(err.message);
        return { success: false };
      } finally {
        setIsPending(false);
      }
    },
    [dispatch]
  );

  return { login: loginUser, isPending, error };
};
