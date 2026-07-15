import { db } from "./firebase.js";
import {
  collection,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

window.track = async function () {

  const trackingNumber = document
    .getElementById("tracking")
    .value
    .trim();

  const shipmentQuery = query(
    collection(db, "shipments"),
    where("tracking", "==", trackingNumber)
  );

  const snapshot = await getDocs(shipmentQuery);

  const result = document.getElementById("result");

  if (snapshot.empty) {
    result.innerHTML =
      "<p style='color:red;'>❌ Tracking number not found.</p>";
    return;
  }

  snapshot.forEach((doc) => {
    const data = doc.data();

    result.innerHTML = `
      <h2>Shipment Details</h2>
      <p><strong>Tracking Number:</strong> ${data.tracking}</p>
      <p><strong>Receiver:</strong> ${data.receiver}</p>
      <p><strong>Current Location:</strong> ${data.location}</p>
      <p><strong>Status:</strong> ${data.status}</p>
    `;
  });

};
