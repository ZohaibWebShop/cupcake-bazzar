class ProductOptions extends HTMLElement {
  constructor() {
    super();
     
     this.element = this.querySelector('.flavours--render');
     this.variant = JSON.parse(this.getAttribute('data-varitant'));
     this.variants = JSON.parse(this.getAttribute('data-varitants'));
    this.variantID = this.variant.id;
     this.metafields = JSON.parse(this.getAttribute('data-metafield'));
     this.options = this.metafields.options;
      this.html = "";
      let $this = this;
      function handleQueryStringChange() {
      const queryString = $this.getQueryParams();
      let variantID = queryString.variant;
      if($this.variantID != variantID){
        $this.variantID = variantID;
        const foundElement = $this.variants.find(variant => variant.id == variantID);
        $this.variant = foundElement;
        $this.variantID = variantID;
        $this.renderOptions();
      }
    }
    setInterval(handleQueryStringChange, 200);

    this.renderOptions();
    this.onCheckboxClick();
    
  }

  getQueryParams() {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
    for (let param of searchParams.entries()) {
      params[param[0]] = param[1];
    }
    return params;
  }

  onCheckboxClick(){
     let $this = this;
     let options = this.options;
    options.forEach((option)=>{
        $this.querySelector(`#flavour--${i}`).addEventListener("click", ()=>{
           alert('clicked');
        });
    });
  }

  renderOptions(){
      let $this = this; 
      let variant = this.variant.title.toLowerCase();
      $this.html = "";
      this.options.forEach((option, i)=>{
           let optionArray = option.split(':');
           if(optionArray[0] == 'both'){
             $this.html += `<input type="checkbox" id="flavour--${i}" name="properties[flavours]" valye="${optionArray[1].toLowerCase().trim()}" />`;
              $this.html += `<label for="flavour--${i}" class="flavour--options-label">${optionArray[1].trim()}</label>`;
           }else{
             if(optionArray[0].trim() === variant){
                 $this.html += `<input type="checkbox" id="flavour--${i}" name="properties[flavours]" valye="${optionArray[1].toLowerCase().trim()}" />`;
                $this.html += `<label for="flavour--${i}" class="flavour--options-label">${optionArray[1].trim()}</label>`;
             }
           }
           
      });

     this.element.innerHTML = $this.html;
  }
}

customElements.define('product-options', ProductOptions);