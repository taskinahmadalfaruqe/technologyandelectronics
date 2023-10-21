import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import Swal from "sweetalert2";

const auth = getAuth(app);

export const AuthContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [isDark, setIsDark]=useState(false)


    //CREATE A USER WITH EMAIL AND PASSWORD
    const createUserWithEmail = async (email, password) => {
        try {
            setLoading(true)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        } catch (error) {
            // Handle the error, e.g., display an error message to the user.
            console.error(error.message);
        }
    };

    //SIGN IN USER WITH EMAIL PASSWORD
    const handelSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // SIGN IN WITH GOOGEL
    const handelGoogleSignIN = (googleProvider) => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // SIGN OUT USER FROM SITE
    const handelSignOut = () => {
        signOut(auth)
            .then((res) => {
                if (res) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User has been Sign In Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                        footer: `${res}`
                    })
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `${error}`
                })
            });
    };

    //UPDATE USER PROFILE
    const handelManageUser = (userName, photoURL) => {
        // setLoading(true);
        updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: photoURL,
        });
    };

    //SET USER
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const Auth = {
        user,
        isLoading,
        isDark,
        setIsDark,
        createUserWithEmail,
        handelSignIn,
        handelSignOut,
        handelGoogleSignIN,
        handelManageUser,

    };

    return (
        <AuthContext.Provider value={Auth}>
            {children}
        </AuthContext.Provider>
    );
};

ContextProvider.propTypes = {
    children: PropTypes.object.isRequired,
};

export default ContextProvider;
