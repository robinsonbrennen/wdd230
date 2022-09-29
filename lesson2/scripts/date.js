//current date 2

try {
   let options = {
       weekday: "long",
       day: "numeric",
       month: "long",
       year: "numeric"
   };
   document.getElementById(
       "currentDate"
   ).textContent = new Date(document.lastModified).toLocaleDateString("en-US", options);
   } catch (e) {
       alert("Error with code or your browser does not support Locale");
   }