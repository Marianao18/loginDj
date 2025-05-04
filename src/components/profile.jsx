import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid); // la colección se llama "Users"
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data());
          } else {
            console.log("El documento del usuario no existe.");
          }
        } catch (error) {
          console.error("Error al obtener los datos:", error.message);
        }
      } else {
        console.log("No hay sesión iniciada.");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {userDetails ? (
        <>
          <h2>Bienvenido, {userDetails.firstName} 👋</h2>
          <p>Correo: {userDetails.email}</p>
        </>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
}

export default Profile;
