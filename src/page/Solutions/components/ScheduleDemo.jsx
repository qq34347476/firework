// import React, { useEffect } from 'react';
// import './ScheduleDemo.css';

// const ScheduleDemo = () => {
//   // Load HubSpot form script
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.src = '//js.hsforms.net/forms/embed/v2.js';
//     script.charset = 'utf-8';
//     script.type = 'text/javascript';
//     document.body.appendChild(script);

//     // Clean up function
//     return () => {
//       document.body.removeChild(script);
//     };
//   });

//   // Initialize HubSpot form
//   useEffect(() => {
//     if (window.hbspt) {
//       window.hbspt.forms.create({
//         region: "na1",
//         portalId: "22195241",
//         formId: "621e07ce-8eb1-4ccb-a60d-025d265dccfb",
//         target: "#hubspot-form",
//         onFormReady: function($form) {
//           const submitButton = $form.querySelector(".hs-button");
//           if (submitButton) {
//             submitButton.addEventListener("click", trackSubmitScheduleDemo);
//           }
//         }
//       });
//     }
//   });

//   // Track form submission
//   const trackSubmitScheduleDemo = () => {
//     // Add your analytics or tracking code here
//     console.log("Form submission tracked");
//   };

//   return (
//     <section 
//       id="ScheduleDemo" 
//       className="schedule-demo full-width-section" 
//       style={{
//         backgroundColor: "#000000",
//         padding: "50px 10%",
//         zIndex: 1
//       }}
//     >
//       <div className="container">
//         {/* Title Section */}
//         <div className="title-section">
//           <h2 className="animate-fade-in-up">Unlock your digital human</h2>
//           <h5 className="animate-fade-in-up">Complete the form to experience the magic of AVA</h5>
//         </div>

//         {/* Form Section */}
//         <div className="form-container">
//           <div className="form-wrapper">
//             <div id="hubspot-form" className="hubspot-form"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ScheduleDemo;


import React, { useEffect, useRef } from 'react';
// import './ContactUsForm.css';


/**
 * @function ContactUsForm
 * @description 联系我们的表单React组件。
 * @returns {JSX.Element}
 */

const ContactUsForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//js.hsforms.net/forms/embed/v2.js';
        script.charset = 'utf-8';
        script.type = 'text/javascript';
        script.async = true;



        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "22195241",
                    formId: "621e07ce-8eb1-4ccb-a60d-025d265dccfb",
                    target: "#hubspot-form",
                });
            }
        };

        document.body.appendChild(script);

        return () => {
            // 清理：移除脚本和可能由脚本创建的元素
            document.body.removeChild(script);
            const formContainer = document.getElementById('hubspotFormContainer');
            if (formContainer) {
                formContainer.innerHTML = ''; // 清空容器内容
            }
            // HubSpot可能会在全局window对象上留下属性，清理它们比较复杂，
            // 通常对于这种第三方脚本，简单的移除script和容器内容是常见的做法。
        };
    }, []);

    return (
        <section 
              id="ScheduleDemo" 
              className="schedule-demo full-width-section" 
              style={{
                backgroundColor: "#000000",
                padding: "50px 10%",
                zIndex: 1
              }}
            >
              <div className="container">
                {/* Title Section */}
                <div className="title-section">
                  <h2 className="animate-fade-in-up">Unlock your digital human</h2>
                  <h5 className="animate-fade-in-up">Complete the form to experience the magic of AVA</h5>
                </div>
        
                {/* Form Section */}
                <div className="form-container">
                  <div className="form-wrapper">
                    <div id="hubspot-form" className="hubspot-form"></div>
                  </div>
                </div>
              </div>
            </section>
    );
};

export default ContactUsForm;
