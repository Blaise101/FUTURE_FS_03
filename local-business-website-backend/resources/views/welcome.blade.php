<!DOCTYPE html>
<html lang="en">

 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>Backend - Blaise Izerimana</title>
  <style>
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }

   body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .container {
    text-align: center;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    padding: 60px 40px;
    border-radius: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    max-width: 600px;
    animation: slideUp 0.8s ease-out;
   }

   @keyframes slideUp {
    from {
     opacity: 0;
     transform: translateY(40px);
    }

    to {
     opacity: 1;
     transform: translateY(0);
    }
   }

   h1 {
    font-size: 2.5em;
    color: #ffffff;
    margin-bottom: 20px;
    font-weight: 700;
    letter-spacing: 1px;
   }

   .text {
    font-size: 1.3em;
    color: #e0e0e0;
    margin-bottom: 40px;
    font-weight: 300;
    line-height: 1.6;
   }

   .decorator {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #667eea, #764ba2);
    margin: 20px auto 30px;
    border-radius: 2px;
   }

   .footer {
    font-size: 0.95em;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 40px;
   }

   .badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 10px 20px;
    border-radius: 50px;
    margin-top: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    font-size: 0.9em;
    color: #ffffff;
   }
  </style>
 </head>

 <body>
  <div class="container">
   <h1>Backend API</h1>
   <div class="decorator"></div>
   <p class="text">This is the backend created by Blaise Izerimana</p>
   <div class="badge">✨ Live & Running</div>
   <p class="footer">Built with passion and precision</p>
  </div>
 </body>

</html>
