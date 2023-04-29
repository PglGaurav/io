import { connectDB } from "@/service/ConnectDB";
import ContactModel from '@/service/ConnectDB';
export default async function handler(req, res) {
            if(req.method  === 'POST')
            {
                    try {
                        connectDB();
                    const {name,email,phone,course,msg} = req.body;
                    const contact = await ContactModel.create({
                        name,email,phone,course,msg
                    })

                    res.json({ success:true,msg:"Submit success" ,error:null })
                    } catch (error) {
                    res.json({ success:false,msg:"internal error" ,error:error.message })
                        
                    }


            }
            else{
                return ;
            }
  }
  