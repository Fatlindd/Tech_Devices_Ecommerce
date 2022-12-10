$(document).ready(function(){
  $(".open").click(function(){
    let currentId = $(this).attr("id");
    slideToggle(currentId);
  });
});

function slideToggle(currentId){
for(let index = 1; index <= 6; index++){
  if(currentId == index){
    $(`.panel${currentId}`).slideToggle();
  } else {
    $(`.panel${index}`).slideUp();
  }
 }
}

const questions = {
                Question1: "Who is your team?", 
                Question2: "What are you offering?",
                Question3: "Where are you located and what areas do you service?",
                Question4: "When did you begin your business?",
                Question5: "How can someone become a client or customer?",
                Question6: "Why are you different?"
              };

const answers = {
                Answer1: `Our team is made up of 4 people, who are professional in the work they do,
                          and with an excellent background with an experience of more than 5 years. 
                          For more, you can also find the contacts in the link by following them on 
                          their social networks.`, 
                Answer2: `We offer the latest technology equipment, starting from computers, monitors,
                          phones, headphones and other electronic equipment that you dream of having in
                           your home.`,
                Answer3: `We are located in many places because we have now expanded. It doesn't matter
                          how far we are, we can be at the home of each of you who wants to have our equipment.`,
                Answer4: `We started the business 5 years ago and this was a project that took a lot of time and
                          money to reach the final project that you can use today, where everything is transparent.`,
                Answer5: `It's very simple, it only takes 2-3 minutes, just register as a new customer if you're 
                          not and you can get instant discounts on our products.`,
                Answer6: `We cannot say that we are more special or different than others. Perhaps our trust in you, 
                          transparency, security, prices and the way we bring products to you, differentiate us a 
                          little in our way of doing business.`
              };

    let val1 = Object.values(questions);
    let val2 = Object.values(answers);

    function generateQuestion(obj1, obj2) {
      let createHtml = '';
      let id = 1;
      for (let index = 0; index <= 5; index++){
              createHtml += `
                        <div class="faq" id="faq">
                          <h3 class="faq-title">${obj1[index]}</h3>
                          <p class="faq-text panel${id}">${obj2[index]}</p>
                          <button class="faq-toggle">
                            <i class="fas fa-chevron-down open" id="${id}"></i>
                            <i class="fas fa-times close" id="${id}"></i>
                          </button>
                        </div>
            `;
            id = id + 1;
      }
      return createHtml;
    }
    $(".faq-container").html(generateQuestion(val1, val2));