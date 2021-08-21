//-======hendler memory=====-//
const memoryLow = document.getElementById('memory-one');
const memoryHigh = document.getElementById('memory-tow');
const memory = document.getElementById('memory-total')

memoryLow.addEventListener('click', function(){
    memory.innerText = '0';
    updateTotal();
});
memoryHigh.addEventListener('click', function(){
    memory.innerText = '180';
    updateTotal();
});

//-=====hendler storage======-//
const storageLow = document.getElementById('storage-one');
const storageMedium = document.getElementById('storage-tow');
const storageHigh = document.getElementById('storage-three');
const storage = document.getElementById('storage-total')

storageLow.addEventListener('click', function(){
    storage.innerText = '0';
    updateTotal();
});
storageMedium.addEventListener('click', function(){
    storage.innerText = '100';
    updateTotal();
});
storageHigh.addEventListener('click', function(){
    storage.innerText = '180';
    updateTotal();
});

//-=======hendler delivery======-//
const deliveryFree = document.getElementById('delivery-one');
const deliveryPremium  = document.getElementById('delivery-tow');
const delivery = document.getElementById('delivery-total');

deliveryFree.addEventListener('click', function(){
    delivery.innerText = '0';
    updateTotal();
});
deliveryPremium.addEventListener('click', function(){
    delivery.innerText = '20';
    updateTotal();
});

//-========final-total handler with function=======-//
const price = document.getElementById('price');
const total = document.getElementById('total');
const finalTotal = document.getElementById('final-total');
//-=======update final-total=======-//
function updateTotal(){
    const memoryCharge = Number(memory.innerText);
    const storageCharge = Number(storage.innerText);
    const productPrice = Number(price.innerText);
    const deliveryCharge = Number(delivery.innerText);
    const grandTotal = memoryCharge + storageCharge + deliveryCharge + productPrice;
    total.innerText = grandTotal;
    finalTotal.innerText = grandTotal;
};


