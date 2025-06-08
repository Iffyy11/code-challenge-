// Boda Boda Ride Fare Estimator

function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;
    const fare = baseFare + (distanceInKm * chargePerKm);

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${fare}`);
    console.log(`\nPanda Pikipiki!`);
}

const distance = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:"));
calculateBodaFare(distance);
