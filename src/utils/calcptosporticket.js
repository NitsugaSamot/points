const Material = require("../models/material.model")

module.exports = {
  calcularPuntosPorTicket: async (materialIds) => {
    try {
      let puntos = 0;
      // Buscar los materiales relacionados en la base de datos
      const materiales = await Material.find({ _id: { $in: materialIds } });

      // Sumar los valores de los materiales para calcular los puntos
      materiales.forEach((material) => {
        puntos += material.valor;
      });

      return puntos;
    } catch (error) {
      console.error("Error al calcular puntos para el ticket:", error.message);
      return null;
    }
  },
};


// module.exports = {
//   calcularPuntosPorTicket: async (ticket) => {
//     try {
//       let puntos = 0;
//       // Verificar si ticket.materialesRelacionados está definido, no está vacío y es un array
//       if (ticket && ticket.materialesRelacionados && Array.isArray(ticket.materialesRelacionados) && ticket.materialesRelacionados.length > 0) {
//         // Iterar sobre los materiales relacionados en el ticket y sumar sus pesos
//         ticket.materialesRelacionados.forEach((material) => {
//           puntos += material.peso;
//         });
//       } else {
//         console.error("No se encontraron materiales relacionados en el ticket o el array está vacío.");
//       }
//       return puntos;
//     } catch (error) {
//       console.error("Error al calcular puntos para el ticket:", error.message);
//       return null;
//     }
//   },
// };


// module.exports = {
//   calcularPuntosPorTicket: async (ticket) => {
//     try {
//       let puntos = 0;
//       // Verificar si ticket.materialesRelacionados está definido y es un array
//       if (ticket && ticket.materialesRelacionados && Array.isArray(ticket.materialesRelacionados)) {
//         // Iterar sobre los materiales relacionados en el ticket y sumar sus pesos
//         ticket.materialesRelacionados.forEach((material) => {
//           puntos += material.peso;
//         });
//       } else {
//         console.error("No se encontraron materiales relacionados en el ticket.");
//       }
//       return puntos;
//     } catch (error) {
//       console.error("Error al calcular puntos para el ticket:", error.message);
//       return null;
//     }
//   },
// };


// module.exports = {
//     calcularPuntosPorTicket: async (ticket) => {
//       try {
//         let puntos = 0;
//         // Iterar sobre los materiales relacionados en el ticket y sumar sus pesos
//         ticket.materialesRelacionados.forEach((material) => {
//           puntos += material.peso;
//         });
//         return puntos;
//       } catch (error) {
//         console.error("Error al calcular puntos para el ticket:", error.message);
//         return null;
//       }
//     },
//   };
  