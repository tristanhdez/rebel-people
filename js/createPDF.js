function getCurrentDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}

function getCurrentTime(){
  var d = new Date(),
  h = (d.getHours()<10?'0':'') + d.getHours(),
  m = (d.getMinutes()<10?'0':'') + d.getMinutes();
  return h + ':' + m;
}


function createPDF(fullName,email,street, street1,street2, col,cp,country,state,phone){

  var doc = new jsPDF();
  var data = getCurrentDate();
  var time = getCurrentTime();
  var temp_y_name = 95;
  var temp_y_quantity = 95;
  var temp_y_imgs = 90;
  var temp_y_price = 95;
  var total = 0;
  doc.setFontSize(11);
  doc.text(20, 10, "Información Personal");
  doc.setFontSize(10);
  doc.text(20, 15, "Nombre: "+fullName);
  doc.text(20, 20, "Correo Electrónico: "+email);
  doc.text(20, 25, "Domicilio: "+street);
  doc.text(20, 30, "Calle 1: "+street1);
  doc.text(20, 35, "Calle 2: "+street2);
  doc.text(20, 40, "Colonia:"+col);
  doc.text(20, 45, "Código Postal:"+cp);


  doc.text(20, 50, "Ciudad: "+country);
  doc.text(20, 55, "Estado: "+state);
  doc.text(20, 60, "Número Telefónico: "+phone);


  doc.addImage(logo, 'JPEG', 187, 5, 15,15);
  doc.text(152, 30, "Fecha de Impresion: "+data);
  doc.text(152, 35, "Hora de Impresion: "+time);
  doc.text(152, 55, "No. Referencia: 000000000000");
  doc.text(152, 60, "Paypal: Juan Francisco");


  doc.line(20, 73, 190, 73);
  doc.text(45, 80, "Producto");
  doc.text(70, 80, "Nombre del Producto");
  doc.text(120, 80, "Cantidad");
  doc.text(153, 80, "Precio");


  doc.line(20, 85, 190, 85);


  for(let i = 0; i < cart.length; i++){
    if(cart[i].varname == "img1"){
      doc.addImage(img1, 'JPEG', 45, temp_y_imgs, 15, 15);
      temp_y_imgs += 20;
    }
    if(cart[i].varname == "img2"){
      doc.addImage(img2, 'JPEG', 45, temp_y_imgs, 15, 15);
      temp_y_imgs += 20;
    }
    if(cart[i].varname == "img3"){
      doc.addImage(img3, 'JPEG', 45, temp_y_imgs, 15, 15);
      temp_y_imgs += 20;
    }
    if(cart[i].varname == "img4"){
      doc.addImage(img4, 'JPEG', 45, temp_y_imgs, 15, 15);
      temp_y_imgs += 20;
    }
    doc.text(70, temp_y_name, JSON.stringify(cart[i].nombre));
    doc.text(126, temp_y_quantity, JSON.stringify(cart[i].cantidad));
    doc.text(155, temp_y_price, JSON.stringify(cart[i].precio));
    temp_y_name += 21;
    temp_y_quantity += 21;
    temp_y_price += 21;
    total += cart[i].cantidad * cart[i].precio;
  }

  doc.line(20, temp_y_imgs+5, 180, temp_y_imgs+5)
  doc.text(45, temp_y_price+5, "TOTAL");
  doc.text(151, temp_y_price+5, "MX$"+total);
  doc.setFontSize(12);
  doc.setFontType('bold')
  doc.text(68, temp_y_price+15, "¡Muchas gracias por realizar tu compra!");
  doc.setFontSize(10);
  doc.text(18, temp_y_price+21, "Para continuar con el proceso, será necesario que realices el depósito en la referencia bancaria establecida");
  doc.text(13, temp_y_price+29, "Una vez hecho el pago, será necesario mandar este archivo al número 3336621942 con tu voucher para validarlo");
  doc.setFontSize(9);
  doc.addImage(instagram, 'JPEG', 15, temp_y_price+40, 7, 7);
  doc.text(25, temp_y_price+44.4, "@juanfrancisco_31");
  doc.addImage(youtube, 'JPEG', 82, temp_y_price+40, 6, 6);
  doc.text(94, temp_y_price+44.3, "JUAN FRANCISCO");
  doc.addImage(tiktok, 'JPEG', 160, temp_y_price+40, 6, 6);
  doc.text(170, temp_y_price+44.4, "@juanfrancisco_31");
  doc.save('Orden_Pago_'+fullName+'.pdf');
}
