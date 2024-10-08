
document.getElementById('donation-btn').addEventListener('click',function(event){
    event.preventDefault;
   togglebtn('donation-section');
})

document.getElementById('history-btn').addEventListener('click',function(event){
    event.preventDefault;
    togglebtn('history-section');
})

// Button color Change

document.getElementById('donation-btn').addEventListener('click',function(event){
    event.preventDefault;
   colorChange('donation-btn');
})

document.getElementById('history-btn').addEventListener('click',function(event){
    event.preventDefault;
   colorChange('history-btn');
})

// Calculate User Amonut
    const userAmount = document.getElementById('user-amount').innerText;
    let UserAmount = parseFloat(userAmount);

// 1st button 

document.getElementById('noakhali-flood-btn').addEventListener('click',function(event){
    event.preventDefault;
    const noakhaliHeading = document.getElementById('noakhali-heading').innerText;
    const NoakhaliFloodTk = inputFeildById('noakhali-flood-tk')
    const nDonation = donationAmount('donation-noakhali')
    console.log(NoakhaliFloodTk,nDonation);
   

    if(UserAmount >= nDonation && nDonation > 0 && isNaN(nDonation)===false){
            const newBalance = NoakhaliFloodTk + nDonation;
            UserAmount = UserAmount - nDonation;
            document.getElementById('user-amount').innerText = UserAmount;
            document.getElementById('noakhali-flood-tk').innerText = newBalance;

            let div = document.createElement('div');
            let currentDateTime = new Date();
            let formattedDateTime = currentDateTime.toString();
            div.classList.add('text-xl','p-8');
            div.innerHTML = `
                 <p>${nDonation} Tk. is ${noakhaliHeading}</p>
                <p>Date: ${formattedDateTime}</p>
            `
            document.getElementById('history-section').appendChild(div);
    }else{
         alert('Please give valid input');
         document.getElementById('my_modal_5').close();
         return null;
    }
})

// 2nd button 

document.getElementById('feni-flood-btn').addEventListener('click',function(event){
    event.preventDefault;
    const feniHeading = document.getElementById('feni-heading').innerText;
    const FeniFloodTk = inputFeildById('feni-flood-tk');
    const fDonation = donationAmount('donation-feni');
    console.log(FeniFloodTk,fDonation)
   

    if(UserAmount >= fDonation && fDonation > 0){
        const newBalance = FeniFloodTk + fDonation;
        UserAmount = UserAmount - fDonation;
        document.getElementById('feni-flood-tk').innerText = newBalance;
        document.getElementById('user-amount').innerText = UserAmount;

        let div = document.createElement('div');
            let currentDateTime = new Date();
            let formattedDateTime = currentDateTime.toString();
            div.classList.add('text-xl','p-8');
            div.innerHTML = `
                 <p>${fDonation} Tk. is ${feniHeading}</p>
                <p>Date: ${formattedDateTime}</p>
            `
            document.getElementById('history-section').appendChild(div);
    }else{
         alert('Please give valid input');
         document.getElementById('my_modal_5').close();
         return null;
    }
})

// 3rd button

document.getElementById('quotaprotest-btn').addEventListener('click',function(event){
    event.preventDefault;
    const quotaHeading = document.getElementById('quota-heading').innerText;
    const QuotaProtestTk = inputFeildById('quotaprotest-tk');
    const qDonation = donationAmount('donation-quota')
    console.log(QuotaProtestTk, qDonation)
   

    if(UserAmount >= qDonation && qDonation > 0){
        const newBalance = QuotaProtestTk + qDonation;
        UserAmount = UserAmount - qDonation;
        document.getElementById('quotaprotest-tk').innerText = newBalance;
        document.getElementById('user-amount').innerText = UserAmount;

        let div = document.createElement('div');
            let currentDateTime = new Date();
            let formattedDateTime = currentDateTime.toString();
            div.classList.add('text-xl','p-8');
            div.innerHTML = `
                 <p>${qDonation} Tk. is ${quotaHeading}</p>
                <p>Date: ${formattedDateTime}</p>
            `
            document.getElementById('history-section').appendChild(div);
    }else{
        alert('Please give valid input');
        document.getElementById('my_modal_5').close();
         return null;
    }
})

   
