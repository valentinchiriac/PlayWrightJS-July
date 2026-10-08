# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 20260804MoreValidations.spec.js >> @Web Popup validations
- Location: PlayWrightAutomation\tests\20260804MoreValidations.spec.js:6:1

# Error details

```
Test timeout of 20000ms exceeded.
```

```
Error: page.goto: Test timeout of 20000ms exceeded.
Call log:
  - navigating to "https://rahulshettyacademy.com/AutomationPractice/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - link:
      - /url: https://www.rahulshettyacademy.com/
    - link "🎯 I’ll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e4] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - generic [ref=e5]:
      - link [ref=e6] [cursor=pointer]:
        - /url: https://www.rahulshettyacademy.com/
        - button "Home" [ref=e7]
      - button "Practice" [ref=e8] [cursor=pointer]
      - button "Login" [ref=e9] [cursor=pointer]
      - button "Signup" [ref=e10] [cursor=pointer]
  - heading "Practice Page" [level=1] [ref=e11]
  - generic [ref=e12]:
    - group "Radio Button Example" [ref=e14]:
      - generic [ref=e16] [cursor=pointer]:
        - radio [ref=e17]
        - text: Radio1
      - generic [ref=e18] [cursor=pointer]:
        - radio [ref=e19]
        - text: Radio2
      - generic [ref=e20] [cursor=pointer]:
        - radio [ref=e21]
        - text: Radio3
    - group "Suggession Class Example" [ref=e23]:
      - textbox "Type to Select Countries" [ref=e25]
    - group "Dropdown Example" [ref=e27]:
      - combobox [ref=e29]:
        - option "Select" [selected]
        - option "Option1"
        - option "Option2"
        - option "Option3"
    - group "Checkbox Example" [ref=e31]:
      - generic [ref=e33] [cursor=pointer]:
        - checkbox [ref=e34]
        - text: Option1
      - generic [ref=e35] [cursor=pointer]:
        - checkbox [ref=e36]
        - text: Option2
      - generic [ref=e37] [cursor=pointer]:
        - checkbox [ref=e38]
        - text: Option3
  - generic [ref=e39]:
    - group "Switch Window Example" [ref=e41]:
      - button "Open Window" [ref=e43] [cursor=pointer]
    - group "Switch Tab Example" [ref=e45]:
      - link "Open Tab" [ref=e47] [cursor=pointer]:
        - /url: https://www.qaclickacademy.com
    - group "Switch To Alert Example" [ref=e49]:
      - textbox "Enter Your Name" [ref=e51]
      - button "Alert" [ref=e52] [cursor=pointer]
      - button "Confirm" [ref=e53] [cursor=pointer]
  - generic [ref=e54]:
    - group "Web Table Example" [ref=e56]:
      - table [ref=e58]:
        - rowgroup [ref=e59]:
          - row [ref=e60]:
            - columnheader "Instructor" [ref=e61]
            - columnheader "Course" [ref=e62]
            - columnheader "Price" [ref=e63]
          - row [ref=e64]:
            - cell "Rahul Shetty" [ref=e65]
            - cell "Selenium Webdriver with Java Basics + Advanced + Interview Guide" [ref=e66]
            - cell "30" [ref=e67]
          - row [ref=e68]:
            - cell "Rahul Shetty" [ref=e69]
            - cell "Learn SQL in Practical + Database Testing from Scratch" [ref=e70]
            - cell "25" [ref=e71]
          - row [ref=e72]:
            - cell "Rahul Shetty" [ref=e73]
            - cell "Appium (Selenium) - Mobile Automation Testing from Scratch" [ref=e74]
            - cell "30" [ref=e75]
          - row [ref=e76]:
            - cell "Rahul Shetty" [ref=e77]
            - cell "WebSecurity Testing for Beginners-QA knowledge to next level" [ref=e78]
            - cell "20" [ref=e79]
          - row [ref=e80]:
            - cell "Rahul Shetty" [ref=e81]
            - cell "Learn JMETER from Scratch - (Performance + Load) Testing Tool" [ref=e82]
            - cell "25" [ref=e83]
          - row [ref=e84]:
            - cell "Rahul Shetty" [ref=e85]
            - cell "WebServices / REST API Testing with SoapUI" [ref=e86]
            - cell "35" [ref=e87]
          - row [ref=e88]:
            - cell "Rahul Shetty" [ref=e89]
            - cell "QA Expert Course :Software Testing + Bugzilla + SQL + Agile" [ref=e90]
            - cell "25" [ref=e91]
          - row [ref=e92]:
            - cell "Rahul Shetty" [ref=e93]
            - cell "Master Selenium Automation in simple Python Language" [ref=e94]
            - cell "25" [ref=e95]
          - row [ref=e96]:
            - cell "Rahul Shetty" [ref=e97]
            - cell "Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C" [ref=e98]
            - cell "20" [ref=e99]
          - row [ref=e100]:
            - cell "Rahul Shetty" [ref=e101]
            - cell "Write effective QA Resume that will turn to interview call" [ref=e102]
            - cell "0" [ref=e103]
    - generic [ref=e104]:
      - group "Element Displayed Example" [ref=e105]:
        - button "Hide" [ref=e107] [cursor=pointer]
        - button "Show" [ref=e108] [cursor=pointer]
        - textbox "Hide/Show Example" [ref=e109]
      - group "Web Table Fixed header" [ref=e110]:
        - table [ref=e113]:
          - rowgroup [ref=e114]:
            - row [ref=e115]:
              - columnheader "Name" [ref=e116]
              - columnheader "Position" [ref=e117]
              - columnheader "City" [ref=e118]
              - columnheader "Amount" [ref=e119]
          - rowgroup [ref=e120]:
            - row [ref=e121]:
              - cell "Alex" [ref=e122]
              - cell "Engineer" [ref=e123]
              - cell "Chennai" [ref=e124]
              - cell "28" [ref=e125]
            - row [ref=e126]:
              - cell "Ben" [ref=e127]
              - cell "Mechanic" [ref=e128]
              - cell "Bengaluru" [ref=e129]
              - cell "23" [ref=e130]
            - row [ref=e131]:
              - cell "Dwayne" [ref=e132]
              - cell "Manager" [ref=e133]
              - cell "Kolkata" [ref=e134]
              - cell "48" [ref=e135]
            - row [ref=e136]:
              - cell "Ivory" [ref=e137]
              - cell "Receptionist" [ref=e138]
              - cell "Chennai" [ref=e139]
              - cell "18" [ref=e140]
            - row [ref=e141]:
              - cell "Jack" [ref=e142]
              - cell "Engineer" [ref=e143]
              - cell "Pune" [ref=e144]
              - cell "32" [ref=e145]
            - row [ref=e146]:
              - cell "Joe" [ref=e147]
              - cell "Postman" [ref=e148]
              - cell "Chennai" [ref=e149]
              - cell "46" [ref=e150]
            - row [ref=e151]:
              - cell "Raymond" [ref=e152]
              - cell "Businessman" [ref=e153]
              - cell "Mumbai" [ref=e154]
              - cell "37" [ref=e155]
            - row [ref=e156]:
              - cell "Ronaldo" [ref=e157]
              - cell "Sportsman" [ref=e158]
              - cell "Chennai" [ref=e159]
              - cell "31" [ref=e160]
            - row [ref=e161]:
              - cell "Smith" [ref=e162]
              - cell "Cricketer" [ref=e163]
              - cell "Delhi" [ref=e164]
              - cell "33" [ref=e165]
        - generic [ref=e166]: "Total Amount Collected: 296"
  - group "Mouse Hover Example" [ref=e169]:
    - button "Mouse Hover" [ref=e172] [cursor=pointer]
  - group "iFrame Example" [ref=e174]:
    - iframe [ref=e176]:
      - generic [ref=f1e2]:
        - banner [ref=f1e5]:
          - generic [ref=f1e8]:
            - list [ref=f1e10]:
              - listitem [ref=f1e11]:
                - generic [ref=f1e12]: 
                - text: contact@rahulshettyacademy.com
            - generic [ref=f1e13]:
              - list [ref=f1e14]:
                - listitem [ref=f1e15]:
                  - link "" [ref=f1e16] [cursor=pointer]:
                    - /url: https://www.youtube.com/channel/UCgx5SDcUQWCQ_1CNneQzCRw
                - listitem [ref=f1e18]:
                  - link "" [ref=f1e19] [cursor=pointer]:
                    - /url: https://linkedin.com/in/rahul-shetty-trainer/
              - link " Register" [ref=f1e22] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_up
                - generic [ref=f1e23]: 
                - text: Register
              - link " Login" [ref=f1e25] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_in
                - generic [ref=f1e26]: 
                - text: Login
          - generic [ref=f1e29]:
            - link [ref=f1e32] [cursor=pointer]:
              - /url: /
            - navigation [ref=f1e34]:
              - list [ref=f1e36]:
                - listitem [ref=f1e37]:
                  - link "Home" [ref=f1e38] [cursor=pointer]:
                    - /url: /
                - listitem [ref=f1e39]:
                  - link "Courses" [ref=f1e40] [cursor=pointer]:
                    - /url: https://courses.rahulshettyacademy.com/courses
                - listitem [ref=f1e41]:
                  - link "NEW All Access plan" [ref=f1e42] [cursor=pointer]:
                    - /url: lifetime-access
                - listitem [ref=f1e43]:
                  - link "NEW Learning paths" [ref=f1e44] [cursor=pointer]:
                    - /url: learning-path
                - listitem [ref=f1e45]:
                  - link "Mentorship" [ref=f1e46] [cursor=pointer]:
                    - /url: mentorship
                - listitem [ref=f1e47]:
                  - link "Job Support" [ref=f1e48] [cursor=pointer]:
                    - /url: consulting
                - listitem [ref=f1e49]:
                  - link "Practice" [ref=f1e50] [cursor=pointer]:
                    - /url: practice-project
                - listitem [ref=f1e51]:
                  - link "Blog" [ref=f1e52] [cursor=pointer]:
                    - /url: https://rahulshettyacademy.com/blog/
                - listitem [ref=f1e53]:
                  - link "More " [ref=f1e54] [cursor=pointer]:
                    - /url: "#"
                    - text: More
                    - generic [ref=f1e55]: 
                  - text: 
        - generic [ref=f1e56]:
          - generic [ref=f1e61]:
            - img "First slide" [ref=f1e62]
            - generic [ref=f1e64]:
              - heading [level=2] [ref=f1e65]:
                - generic [ref=f1e66]:
                  - text: An Academy to
                  - strong [ref=f1e67]: Learn Earn & Shine
                  - text: in your QA Career
              - heading "World-class tutorials on Selenium, Rest Assured, Cypress, Appium, Postman, Cucumber, SoapUI, Playwright, Jmeter, Jira, and many more. Join our courses now to get the best job opportunity." [level=3] [ref=f1e68]
              - link "JOIN NOW" [ref=f1e70] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/sign_up
          - generic [ref=f1e74]:
            - generic [ref=f1e76]:
              - generic [ref=f1e77]: 
              - generic [ref=f1e79]: 600,000 +
              - heading "Students" [level=4] [ref=f1e80]
            - generic [ref=f1e82]:
              - generic [ref=f1e83]: 
              - generic [ref=f1e85]: 30 +
              - heading "Courses" [level=4] [ref=f1e86]
            - generic [ref=f1e88]:
              - generic [ref=f1e89]: 
              - generic [ref=f1e91]: 257,000 +
              - heading "Ratings" [level=4] [ref=f1e92]
            - generic [ref=f1e94]:
              - generic [ref=f1e95]: 
              - generic [ref=f1e97]: 30 +
              - heading "Projects" [level=4] [ref=f1e98]
          - generic [ref=f1e101]:
            - heading "why we are Leaders in market?!" [level=2] [ref=f1e102]
            - generic [ref=f1e103]:
              - list [ref=f1e105]:
                - listitem [ref=f1e106]: The academy is led by Rahul Shetty, a Test evangelist and Test architect with over 10+ years in the IT industry.
                - listitem [ref=f1e107]: Rahul Shetty is a pioneer and authority in software testing space.
                - listitem [ref=f1e108]: He has taught over 300,000 students in 195 countries from across the world.
                - listitem [ref=f1e109]: All our courses are based on Real Time Project based where you learn real skill which are readily transferable to your work project.
                - listitem [ref=f1e110]: Our courses are guaranteed to help you reach your career goals and develop your automation skills
                - listitem [ref=f1e111]: Life time access, Learn at your own pace and updates are Free for Life.
              - list [ref=f1e113]:
                - listitem [ref=f1e114]: Wide coverage of topics like Selenium, Appium, Cucumber BDD, Cypress, Protractor, RestAPI, SoapUI and JMeter etc.
                - listitem [ref=f1e115]: His mentorship program is most after in the software testing community with long waiting period.
                - listitem [ref=f1e116]: Once under his mentorship, you are preparing yourself for long term success with his expert guidance and support.
                - listitem [ref=f1e117]: Lot of companies have already benefited from our consulting services.
                - listitem [ref=f1e118]: We are essentially a Full Stack QA consulting and Training company and we got you covered for your test implementation and training needs.
          - generic [ref=f1e120]:
            - generic [ref=f1e121]:
              - heading "Our Students" [level=2] [ref=f1e122]
              - generic [ref=f1e123]: See what our students say about us. We are proud to show some of best feedback with lot of love & proud!!
            - generic [ref=f1e124]:
              - generic [ref=f1e126]:
                - generic [ref=f1e130]:
                  - text: 
                  - heading "Zubair Rowley" [level=4] [ref=f1e131]
                  - generic [ref=f1e132]: Student of software testing
                  - generic [ref=f1e133]: Guys, I was a Nervous newbie in this software testing few days ago, but by just completing my 50% course, I am now confident becoz of knowledge shared by Rahul shetty sir, that i will crack the job of Software Test Engineer. I was 0 in Technical field, but now i can say i have some rare knowledge which will help me to deal with my goals and challenges in testing. Trying my level best to explore more n more in testing due to CURIOSITY ABOUT SOFTWARE TESTING created in my mind by Rahul sir's Guidance.Thank You sir.
                  - generic [ref=f1e134]:
                    - generic [ref=f1e135]: 
                    - generic [ref=f1e136]: 
                    - generic [ref=f1e137]: 
                    - generic [ref=f1e138]: 
                    - generic [ref=f1e139]: 
                - generic [ref=f1e143]:
                  - text: 
                  - heading "Sania Wynn" [level=4] [ref=f1e144]
                  - generic [ref=f1e145]: student of selenium
                  - generic [ref=f1e146]: I am so glad I found the right course and the right instructor. The instructor is too good..knowledgeable and supportive. I always get replies on my queries within hours and that helps me become productive. And this shows the dedication of the instructor as well. Very commendable and exceptional and elaborate teaching.Studying this course has increased my confidence.
                  - generic [ref=f1e147]:
                    - generic [ref=f1e148]: 
                    - generic [ref=f1e149]: 
                    - generic [ref=f1e150]: 
                    - generic [ref=f1e151]: 
                    - generic [ref=f1e152]: 
                - generic [ref=f1e156]:
                  - text: 
                  - heading "Gruffydd Dickerson" [level=4] [ref=f1e157]
                  - generic [ref=f1e158]: Student of software testing
                  - generic [ref=f1e159]: Guys,I was a Nervous newbie in this software testing few days ago, but by just completing my 50% course, I am now confident becoz of knowledge shared by Rahul shetty sir, that i will crack the job of Software Test Engineer. I was 0 in Technical field,but now i can say i have some rare knowledge which will help me to deal with my goals and challenges in testing. Trying my level best to explore more n more in testing due to CURIOSITY ABOUT SOFTWARE TESTING created in my mind by Rahul sir's Guidance.Thank You sir.
                  - generic [ref=f1e160]:
                    - generic [ref=f1e161]: 
                    - generic [ref=f1e162]: 
                    - generic [ref=f1e163]: 
                    - generic [ref=f1e164]: 
                    - generic [ref=f1e165]: 
                - generic [ref=f1e169]:
                  - text: 
                  - heading "Jesse Shepard" [level=4] [ref=f1e170]
                  - generic [ref=f1e171]: student of selenium
                  - generic [ref=f1e172]: I am so glad I found the right course and the right instructor. The instructor is too good..knowledgeable and supportive. I always get replies on my queries within hours and that helps me become productive.And this shows the dedication of the instructor as well. Very commendable and exceptional and elaborate teaching.Studying this course has increased my confidence.
                  - generic [ref=f1e173]:
                    - generic [ref=f1e174]: 
                    - generic [ref=f1e175]: 
                    - generic [ref=f1e176]: 
                    - generic [ref=f1e177]: 
                    - generic [ref=f1e178]: 
                - generic [ref=f1e182]:
                  - text: 
                  - heading "Zubair Rowley" [level=4] [ref=f1e183]
                  - generic [ref=f1e184]: Student of software testing
                  - generic [ref=f1e185]: Guys, I was a Nervous newbie in this software testing few days ago, but by just completing my 50% course, I am now confident becoz of knowledge shared by Rahul shetty sir, that i will crack the job of Software Test Engineer. I was 0 in Technical field, but now i can say i have some rare knowledge which will help me to deal with my goals and challenges in testing. Trying my level best to explore more n more in testing due to CURIOSITY ABOUT SOFTWARE TESTING created in my mind by Rahul sir's Guidance.Thank You sir.
                  - generic [ref=f1e186]:
                    - generic [ref=f1e187]: 
                    - generic [ref=f1e188]: 
                    - generic [ref=f1e189]: 
                    - generic [ref=f1e190]: 
                    - generic [ref=f1e191]: 
                - generic [ref=f1e195]:
                  - text: 
                  - heading "Sania Wynn" [level=4] [ref=f1e196]
                  - generic [ref=f1e197]: student of selenium
                  - generic [ref=f1e198]: I am so glad I found the right course and the right instructor. The instructor is too good..knowledgeable and supportive. I always get replies on my queries within hours and that helps me become productive. And this shows the dedication of the instructor as well. Very commendable and exceptional and elaborate teaching.Studying this course has increased my confidence.
                  - generic [ref=f1e199]:
                    - generic [ref=f1e200]: 
                    - generic [ref=f1e201]: 
                    - generic [ref=f1e202]: 
                    - generic [ref=f1e203]: 
                    - generic [ref=f1e204]: 
                - generic [ref=f1e208]:
                  - text: 
                  - heading "Gruffydd Dickerson" [level=4] [ref=f1e209]
                  - generic [ref=f1e210]: Student of software testing
                  - generic [ref=f1e211]: Guys,I was a Nervous newbie in this software testing few days ago, but by just completing my 50% course, I am now confident becoz of knowledge shared by Rahul shetty sir, that i will crack the job of Software Test Engineer. I was 0 in Technical field,but now i can say i have some rare knowledge which will help me to deal with my goals and challenges in testing. Trying my level best to explore more n more in testing due to CURIOSITY ABOUT SOFTWARE TESTING created in my mind by Rahul sir's Guidance.Thank You sir.
                  - generic [ref=f1e212]:
                    - generic [ref=f1e213]: 
                    - generic [ref=f1e214]: 
                    - generic [ref=f1e215]: 
                    - generic [ref=f1e216]: 
                    - generic [ref=f1e217]: 
                - generic [ref=f1e221]:
                  - text: 
                  - heading "Jesse Shepard" [level=4] [ref=f1e222]
                  - generic [ref=f1e223]: student of selenium
                  - generic [ref=f1e224]: I am so glad I found the right course and the right instructor. The instructor is too good..knowledgeable and supportive. I always get replies on my queries within hours and that helps me become productive.And this shows the dedication of the instructor as well. Very commendable and exceptional and elaborate teaching.Studying this course has increased my confidence.
                  - generic [ref=f1e225]:
                    - generic [ref=f1e226]: 
                    - generic [ref=f1e227]: 
                    - generic [ref=f1e228]: 
                    - generic [ref=f1e229]: 
                    - generic [ref=f1e230]: 
              - text:  
          - generic [ref=f1e231]:
            - generic [ref=f1e233]:
              - heading "Featured Courses" [level=2] [ref=f1e235]
              - generic [ref=f1e236]: Dollar($) Rupee(₹)
            - link "VIEW ALL COURSES" [ref=f1e241] [cursor=pointer]:
              - /url: https://courses.rahulshettyacademy.com/courses
        - generic [ref=f1e244]:
          - generic [ref=f1e245]:
            - heading "JOIN OUR ACADEMY" [level=2] [ref=f1e246]
            - generic [ref=f1e247]: Sign up today and get access to "Core Java for Testers" & "QA Resume Preparation" Courses for FREE.
          - link "JOIN NOW" [ref=f1e250] [cursor=pointer]:
            - /url: https://courses.rahulshettyacademy.com/sign_up
        - contentinfo [ref=f1e251]:
          - generic [ref=f1e254]:
            - generic [ref=f1e256]:
              - text: All Right Reserved
              - link "RahulShettyAcademy" [ref=f1e257] [cursor=pointer]:
                - /url: "#"
              - text: © 2026
            - list [ref=f1e259]:
              - listitem [ref=f1e260]:
                - link "About Us" [ref=f1e261] [cursor=pointer]:
                  - /url: /about-my-mission
              - listitem [ref=f1e262]:
                - link "Contact Us" [ref=f1e263] [cursor=pointer]:
                  - /url: contact-us
              - listitem [ref=f1e264]:
                - link "Privacy Policy" [ref=f1e265] [cursor=pointer]:
                  - /url: /privacy
        - text: 
  - table [ref=e178]:
    - rowgroup [ref=e179]:
      - row [ref=e180]:
        - cell [ref=e181]:
          - list [ref=e182]:
            - listitem [ref=e183]:
              - heading [level=3] [ref=e184]:
                - link "Discount Coupons" [ref=e185] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e186]:
              - link "REST API" [ref=e187] [cursor=pointer]:
                - /url: http://www.restapitutorial.com/
            - listitem [ref=e188]:
              - link "SoapUI" [ref=e189] [cursor=pointer]:
                - /url: https://www.soapui.org/
            - listitem [ref=e190]:
              - link "Appium" [ref=e191] [cursor=pointer]:
                - /url: https://courses.rahulshettyacademy.com/p/appium-tutorial
            - listitem [ref=e192]:
              - link "JMeter" [ref=e193] [cursor=pointer]:
                - /url: https://jmeter.apache.org/
        - cell [ref=e194]:
          - list [ref=e195]:
            - listitem [ref=e196]:
              - heading [level=3] [ref=e197]:
                - link "Latest News" [ref=e198] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e199]:
              - link "Broken Link" [ref=e200] [cursor=pointer]:
                - /url: https://rahulshettyacademy.com/brokenlink
            - listitem [ref=e201]:
              - link "Dummy Content for Testing." [ref=e202] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e203]:
              - link "Dummy Content for Testing." [ref=e204] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e205]:
              - link "Dummy Content for Testing." [ref=e206] [cursor=pointer]:
                - /url: "#"
        - cell [ref=e207]:
          - list [ref=e208]:
            - listitem [ref=e209]:
              - heading [level=3] [ref=e210]:
                - link "Contact info" [ref=e211] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e212]:
              - link "Dummy Content for Testing." [ref=e213] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e214]:
              - link "Dummy Content for Testing." [ref=e215] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e216]:
              - link "Dummy Content for Testing." [ref=e217] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e218]:
              - link "Dummy Content for Testing." [ref=e219] [cursor=pointer]:
                - /url: "#"
        - cell [ref=e220]:
          - list [ref=e221]:
            - listitem [ref=e222]:
              - heading [level=3] [ref=e223]:
                - link "Social Media" [ref=e224] [cursor=pointer]:
                  - /url: "#"
            - listitem [ref=e225]:
              - link "Facebook" [ref=e226] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e227]:
              - link "Twitter" [ref=e228] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e229]:
              - link "Google+" [ref=e230] [cursor=pointer]:
                - /url: "#"
            - listitem [ref=e231]:
              - link "Youtube" [ref=e232] [cursor=pointer]:
                - /url: "#"
  - generic [ref=e233]:
    - text: © 2019 Powered by
    - strong [ref=e234]:
      - link "Medianh Consulting" [ref=e235] [cursor=pointer]:
        - /url: http://www.medianhconsulting.com
  - status [ref=e236]
```

# Test source

```ts
  1  | const { test, expect } = require("@playwright/test");
  2  | 
  3  | //test.describe.configure({mode:'parallel'});
  4  | //test.describe.configure({mode:'serial'});
  5  | 
  6  | test("@Web Popup validations", async ({ page }) => {
> 7  |   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
     |              ^ Error: page.goto: Test timeout of 20000ms exceeded.
  8  | 
  9  |   // await page.goto("http://google.com");
  10 |   // await page.goBack();
  11 |   // await page.goForward();
  12 |   await expect(page.locator("#displayed-text")).toBeVisible();
  13 |   await page.locator("#hide-textbox").click();
  14 |   await expect(page.locator("#displayed-text")).toBeHidden();
  15 |   page.on("dialog", (dialog) => dialog.accept());
  16 |   await page.locator("#confirmbtn").click();
  17 |   await page.locator("#mousehover").hover();
  18 |   const framesPage = page.frameLocator("#courses-iframe");
  19 |   await framesPage.locator("li a[href*='lifetime-access']:visible").click();
  20 |   const textCheck = await framesPage.locator(".text h2").textContent();
  21 |   console.log(textCheck.split(" ")[1]);
  22 | });
  23 | 
  24 | test("Screenshot & Visual comparision", async ({ page }) => {
  25 |   await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  26 |   await expect(page.locator("#displayed-text")).toBeVisible();
  27 |   await page
  28 |     .locator("#displayed-text")
  29 |     .screenshot({ path: "partialScreenshot.png" });
  30 |   await page.locator("#hide-textbox").click();
  31 |   await page.screenshot({ path: "screenshot.png" });
  32 |   await expect(page.locator("#displayed-text")).toBeHidden();
  33 | });
  34 | //screenshot -store -> screenshot ->
  35 | test("visual", async ({ page }) => {
  36 |   //make payment -when you 0 balance
  37 |   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  38 |   expect(await page.screenshot()).toMatchSnapshot("landing.png");
  39 | });
  40 | 
```