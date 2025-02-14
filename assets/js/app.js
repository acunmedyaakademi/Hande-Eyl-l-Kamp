const filePath = "assets/json/company.json";
const main = document.querySelector('.companies');

let companies = [];

async function getCompanyInfo(){
    try {
        const response = await fetch(filePath);
        if(!response.ok){
            throw new Error ("Veri alınamadı.");
        }
        const data = await response.json();
        companies = data;
        console.log(companies);
        renderCompany();
        
    } catch (error) {
        console.log(error);
        
    }

}

function renderCompany(){
    companies.forEach(company => {
        main.innerHTML += `
        <div class="company-container">
                <img src="assets/${company.logo}" alt="">
                <div class="company-info">
                    <p>5h ago  .  <span>${company.contract}</span></p>
                    <h1>${company.position}</h1>
                    <p>${company.company}</p>
                    <h4>${company.location}</h4>
                </div>
                
            </div>
        `
    })
}

getCompanyInfo();