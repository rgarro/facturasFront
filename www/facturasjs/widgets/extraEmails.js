var extraEmails = (function(){

  function extraEmails(){
    this.parentVars();
    //this.newInput = "#extraEmailNewTInput";
    this.newInput = "extraEmailNewTInput";
    this.hiddenInput = "#extraEmailNewInput";
    this.addBtn = "#extraEmailAddBtn";
    this.delBtn = ".delexmail";
    this.displayBox = "#extraEmailsBox";
    this.emailBoxSrc = "<span class='badge badge-pill badge-warning animated fadeInDown' style='margin-right:3px;'>{{email}} <i data-index='{{index}}' class='fa fa-trash delexmail' style='cursor:pointer;'></i></span>";
    this.emailBoxTpl = Handlebars.compile(this.emailBoxSrc);
    this.emails = [];
  }

  extraEmails.prototype = Object.create(CRFut.FacturasCR.prototype);
  extraEmails.prototype.constructor = extraEmails;

  extraEmails.prototype.add = function(email){
    if(!this.inList(email)){
      this.emails.push(email);
      this.updateHidden();
      var e_index = this.emails.length - 1;
      this.updateDisplay(email,e_index);
    }
  }

  extraEmails.prototype.remove = function(index){
    this.emails.splice(index,1);
    this.updateHidden();
    this.rebuildDisplay();
  }

  extraEmails.prototype.rebuildDisplay = function(){
    $(this.displayBox).html(" ");
    for(var i =0;i < this.emails.length;i++){
      this.updateDisplay(this.emails[i],i);
    }
  }

  extraEmails.prototype.inList = function(email){
    if(this.emails.indexOf(email) == -1){
      return false;
    }else {
      return true;
    }
  }

  extraEmails.prototype.updateDisplay = function(email,e_index){
    var params = {email:email,index:e_index};
    var html_badge = this.emailBoxTpl(params);
    $(this.displayBox).append(html_badge);
  }

  extraEmails.prototype.updateHidden = function(){
    var emails_str = this.emails.join(",");
    $(this.hiddenInput).val(emails_str);
  }

  extraEmails.prototype.init = function(){
    //add button listener ...
    $(this.addBtn).on("click",(function(evt){
      var email = $("#" + this.newInput).val();
      if(email.length > 5){
          if(document.getElementById(this.newInput).validity.valid){
            this.add(email);
          }else{
            this.alert_error(translate("ValidEmail"));
          }
      }
    }).bind(this));
    //del button listener
    $(document).on("click",this.delBtn,(function(evt){
      var index = $(evt.target).data("index");
      this.remove(index);
    }).bind(this));
  }

  return extraEmails;
})();

CRFut.Widgets.extraEmails = extraEmails;
