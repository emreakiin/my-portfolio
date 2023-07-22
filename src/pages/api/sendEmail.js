import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { first, email, last, message } = req.body;

    try {
      // E-posta gönderme işlemini gerçekleştirecek transport oluşturma
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // E-posta servisi (örneğin, Gmail)
        auth: {
          user: 'emreakinn60@gmail.com', // Formdaki e-posta adresini gönderen olarak kullanıyoruz
          pass: 'gvxhbrrppujehqrn', // E-posta hesabınızın şifresi veya uygulama parolası
        },
      });

      const mailOptions = {
        from: `${email}`, // Formdaki alıcı adını ve e-posta adresini gönderen olarak kullanıyoruz
        to: 'emreakinn60@gmail.com', // E-posta alıcısı (kendi e-posta adresiniz veya istediğiniz e-posta adresi)
        text: `${first} ${last}\nEmail: ${email}\n\nMessage: ${message}`,
      };

      // E-postayı gönderme işlemini gerçekleştirme
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'E-posta başarıyla gönderildi.' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'E-posta gönderilirken bir hata oluştu.' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
