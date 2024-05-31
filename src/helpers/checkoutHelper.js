
import axios from 'axios';


export const CheckoutHelper = async  (getCartName, cartTotal, email) =>{

    



     const data = {
      service_id: "service_4hpa7op",
      template_id: 'template_k6gwn24',
      user_id: 'OHvjNlFp5yHrt_NyH',
      template_params: {

        user_name: 'Thunder Boltz Private Limited.',
        product_name: getCartName,
        product_qty: 'Web Wizard',
        product_price: '1111',
        product_subtotal:cartTotal,
        product_total : cartTotal,
        to_email: email
      }
    };
   
    try {
        const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }


}
