import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { toast } from "react-toastify";

export const useSignup = () => {
  const dispatch = useDispatch();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const signup = useCallback(
    async (displayName, email, password) => {
      setIsPending(true);
      setError(null);

      try {
        if (!displayName || !email || !password) {
          throw new Error("Barcha maydonlarni to‘ldiring.");
        }

        const res = await createUserWithEmailAndPassword(auth, email, password);
        if (!res.user) throw new Error("Ro'yxatdan o'tishda xatolik yuz berdi");

        await updateProfile(res.user, { displayName });

        dispatch(
          login({
            uid: res.user.uid,
            email: res.user.email,
            displayName: res.user.displayName,
          })
        );

        toast.success(`🎉 Welcome ${displayName}`);
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

  return { signup, isPending, error };
};
