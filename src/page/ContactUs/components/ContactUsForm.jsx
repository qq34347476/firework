import React, { useEffect, useRef } from 'react';
import './ContactUsForm.css';


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
          formId: "809aea32-d46a-4ff1-92ca-592d879b0ce4",
          target: '#hubspotFormContainer' // 指定表单渲染的目标容器
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
    <section className="signup_section contact-us">
      <div className="padding-global">
        <div className="signup_body">
          <div className="signup_copy contact-us">
            <h1 className="signup_title contact-us">Contact us today!</h1>
            <div className="signup_bullets">
              <p>
                Want to get in touch about partnerships or media opportunities? We’d love to hear from you. Just
                complete this form and we'll be in touch soon.
              </p>
            </div>
          </div>
          <div className="signup_form">
            {/* HUBSPOT FORM STYLES - 这些样式现在在 ContactUsForm.css 文件中 */}
            <div className="w-richtext">
              {/* 表单将通过useEffect中的脚本动态插入到这里 */}
              <div id="hubspotFormContainer"></div>
            </div>
            <div className="spacer-xsm"></div>
            <p className="text-size-tiny">
              By submitting this form, you agree to CELL digital's{' '}
              <a href="https://firework.com/legal/privacypolicy" className="privacy-policy-link">
                privacy policy
              </a>{' '}
              and consent to receive personalized marketing communications. You can unsubscribe at any time.
            </p>
          </div>
        </div>
        <div className="spacer-huge"></div>
      </div>
    </section>
  );
};

export default ContactUsForm;
