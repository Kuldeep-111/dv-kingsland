const Disclaimer = () => {
    return (
      <div
        className="container mx-auto "
        style={{ marginTop: '2%', border: '1px solid #333' }}
      >
        <div
          style={{
            margin: 'auto',
            font: 'normal 13px Arial',
            padding: '30px',
          }}
        >
          <h2 style={{ textAlign: 'center', fontSize: '20px' }}>
            Disclaimer & Privacy Policy
          </h2>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b style={{  fontSize: '15px' }}>Disclaimer: </b>
            This website is only for the purpose of providing information regarding real estate projects in different regions, by accessing this website.
            <br />
            Please also note that the company has not verified the information and the compliances.
            <br />
            <strong>This site is for information purposes only and should not be treated as the official website.</strong>
          </p>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b style={{ fontSize: '15px' }}>Privacy Policy: </b>
            In our endeavour and commitment to protecting your personal information, we have designed this comprehensive privacy policy.
          </p>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b >Updating privacy policy: </b>
            This privacy policy is subject to change and review without any prior notice.
          </p>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b >User information: </b>
            By using our website, You agree to abide by the rules we have laid out and consent to the collection and use of all such information.
          </p>
  
          <p style={{ paddingTop: '10px', textAlign: 'justify', lineHeight: '24px' }}>
            <b >Security: </b>
            To ensure security while transferring sensitive information, all the ongoing transmissions between client and server are encrypted.
          </p>
        </div>
  
      
      </div>
    );
  };
  
  export default Disclaimer;
  