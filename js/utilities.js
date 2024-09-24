
function togglebtn(id){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function inputFeildById(id){
    const floodTk = document.getElementById(id).innerText;
    const FloodTk = parseFloat(floodTk);
    return FloodTk;
}

function donationAmount(id){
    const donation = document.getElementById(id).value;
    const Donation = parseFloat(donation)
    return Donation;
}

function colorChange(id){
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById(id).classList.add('bg-[#B4F461]');
}