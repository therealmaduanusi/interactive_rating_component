const main = document.getElementById('main')
let btn = document.querySelector('button');
let nums = document.querySelectorAll('.numbers')


nums.forEach(num => {
    num.addEventListener('click', () =>{
        rateText = num.innerText;
    })
})

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let totalRate = nums.length;
    // console.log(rateText);
    // console.log(totalRate);
    main.innerHTML = `
    <section>
        <img src="/images/Online_payment.svg" alt="">
        <p>You selected ${rateText} out of ${totalRate}</p>
        <h1>Thank you!</h1>
        <p>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
        </p>
    </section>
    `
    console.log("hello js");
})