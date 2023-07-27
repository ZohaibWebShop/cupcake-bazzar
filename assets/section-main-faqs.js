class FAQestion extends HTMLElement {
  constructor() {
    super();
     let _this = this;
    this.active = null; 
    let questions = this.querySelectorAll('.faqs--questions-wrapper');
    this.findActive(questions);
    questions.forEach((node, i)=>{
       node.addEventListener('click', () => {
        _this.faqClick(node);
      });
    })
  }

  findActive(questions){
      let _this = this;
      questions.forEach((node, i)=>{
      if(node.classList.contains('active')){
        _this.active = node;
      }
    })
  }
  
  

  faqClick(node){
    let _this = this;
    node.classList.add('active');
    _this.active.classList.remove('active');
    _this.active = node;
  }

  
}


customElements.define('fa-qestion', FAQestion);