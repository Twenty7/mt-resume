<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import ExpComponent from '../components/ExpComponent.vue';

</script>
<template>
  <section class="mt-resume container mx-auto">

    <div class="inner-container text-left mx-auto border bg-base-100 border-base-300 rounded-box p-10">


      <div class="flex">
        <div class="w-1 flex-auto">
          <div class="subtitle text-lg font-bold">
            Matthew Taylor
          </div>
          <div>
            <FontAwesomeIcon :icon="['fa', 'house']" /> 1210 El Paseo, Foothill Ranch, CA 92610
          </div>
          <div>
            <FontAwesomeIcon :icon="['fa', 'globe']" /> <a href="http://mt.eight9.net">mt.eight9.net</a>
          </div>
        </div>
        <div class="w-1 flex-auto text-right">
          <div class="subtitle text-lg font-semibold">
            Software Developer
          </div>
          <div>
            <FontAwesomeIcon :icon="['fa', 'phone']" /> <a href="tel:+19513156113">+1.951.315.6113</a>
          </div>
          <div>
            <FontAwesomeIcon :icon="['fa', 'envelope']" /> <a href="mailto:mtaylor@eight9.net">mtaylor@eight9.net</a>
          </div>
        </div>
      </div>

      <h2 class="subtitle text-xl font-bold">Summary</h2>
      <p>
        Senior Software Developer with more than 10 years of professional experience in architecting and developing online web applications as well as their supporting infrastructure. Primary technical focus points include PHP, Javascript, NodeJS, GO, PostgreSQL, AWS, Docker, Terraform, Ansible, as well as instrumentation and application optimization for high throughput web applications. Strong background in system architecture, requirements gathering, project management, leadership, and peer mentorship.
      </p>

      <h2 class="subtitle text-xl font-bold">Personal Skills</h2>
      <div class="mx-8">
        <ul class="list-disc grid grid-cols-2 text-sm gap-x-8 gap-y-1 text-sm">
          <li>Fluent in written and spoken English</li>
          <li>Self-Managed</li>
          <li>Effective Collaborator</li>
          <li>Fast Learner</li>
          <li>Detail Oriented</li>
          <li>Dedicated, Reliable, & Passionate</li>
        </ul>
      </div>

      <h2 class="subtitle text-xl font-bold">Tech Skills</h2>
      <div class="mx-8">
        <ul class="list-disc grid grid-cols-2 text-sm gap-x-8 gap-y-1 text-sm">
          <li>Linux, Mac, Windows</li>
          <li>CSS, XHTML, XML, JSON, SQL, NOSQL</li>
          <li>PHP, Golang, JavaScript, Typescript, NodeJS, Python, Perl</li>
          <li>PostgreSQL, MySQL, TimeScaleDB, Redis, Elastic Search, MongoDB</li>
          <li>PHP-FPM, Traefik, Nginx, Apache, Varnish, RabbitMQ, SQS</li>
          <li>Terraform, Ansible, Docker, Auto Scaling, NewRelic, DataDog</li>
          <li>AWS, Cloud Formation, EC2, RDS, S3, ELB, Lambda, ECS/Fargate, SQS</li>
          <li>ExpressJS, Symfony, VueJS, Bootstrap, TailwindCSS</li>
          <li>Agile, Waterfall, Jira, ZenDesk, GH Projects</li>
          <li>Git, Github, SVN</li>
          <li>System Administration, Devops, UI/UX Design, Scalability, Application Performance Management</li>
          <li>Instrumentation, Continuous Integration, TDD</li>
        </ul>
      </div>


      <h2 class="subtitle text-xl font-bold">Experience</h2>

      <ExpComponent
        company="Eight9 Design Network INC"
        title="Founder / Software Developer"
        location="Remote"
        date="January 2024 - Current"
      >
        <p>
          Started a one-person Software Consulting company offering custom tech solutions and services for business customers.
          Primarily consulted with <strong>Kelvin Education</strong> and a few smaller companies to plan, design, and execute several projects including auth service architecture & Implementation, legacy monolith app cloud service migration, system administration, as well as designing and creating new web applications and websites.
        </p>
        <p class="text-sm">
          PHP, NodeJS, PostgreSQL, Typescript, VueJS, Go, AWS, ECS, Lambda, Ansible, Packer, Terraform, GitHub Actions, Heroku
        </p>
      </ExpComponent>


      <ExpComponent
        company="Lila Holdings"
        title="Software Developer / System Administrator"
        location="Remote"
        date="June 2022 - October 2024"
      >
        <p>
          Responsible for building, setting up, installing, and monitoring a fleet of servers at a traditional datacenter for a Blockchain Validator (Onomy Protocol). This included tooling for setup as well as monitoring the status of the systems and validator on the chain. 
        </p>
        <p class="text-sm">
          System Administration, Bash, NodeJS, Docker, Nginx, Libvirt
        </p>
      </ExpComponent>

      <ExpComponent
        company="Clean Energy Japan"
        title="Software Developer"
        location="Remote"
        date="November 2020 - December 2024"
      >
        <p>
          Responsibilities included designing and creating a customer dashboard to log, report, and notify users of power analytics and anomalies for Solar and Wind Turbine systems. The system also integrated with RTSP security cameras to run images through Ultralytics AI vision for people detection and notifying users.
        </p>
        <p class="text-sm">
          PHP, NodeJS, PostgreSQL, TimeScaleDB, VueJS, AWS, System Administration, SMS, Queuing, Web Push Notifications, Slack API
        </p>
      </ExpComponent>

      <ExpComponent
        company="Townsquare Media / AnalyticOwl"
        title="Software Developer"
        location="Remote"
        date="March 2019 - November 2020"
      >
        <p>
          Senior Developer on a team of 5. Developed and maintained frontend and backend components for importing, aggregating, and reporting advertisement analytics.
        </p>
        <p class="text-sm">
          PHP, NodeJS, PostgreSQL, JavaScript, VueJS, Semantic UI, SCSS, JSON, Docker, AWS, Lambda, Queuing
        </p>
      </ExpComponent>

      <ExpComponent
        company="Nordic Colocation Computing AB"
        title="Software Developer"
        location="Stockholm, Sweden"
        date="April 2018 - February 2019"
      >
        <p>
          Architected and developed cloud infrastructure for cryptocurrency mining pool server as well as a client facing mining infrastructure monitoring and reporting application. Queuing and uptime monitor system.
        </p>
        <p class="text-sm">
          Golang, Python, Bash, Docker, AWS, Cloud Formation, Elastic Search (ELK Stack), PostgreSQL, MySQL, RabbitMQ, JavaScript, JQuery, C3.js Charts, CSS, Bootstrap, JSON
        </p>
      </ExpComponent>

      <ExpComponent
        company="Previous History"
        title="Manager / Software Developer"
        location="Illuminate Education, Houghton Mifflin Harcourt, Achieve! Data Solutions"
        date=""
        locationClass="text-sm"
        :leftWidth="3"
        :rightWidth="2"
      >
        <p>
          Managed team of 6 & remote team of 5. Designed & developed a paper (PDF) & online testing application with 25k-30k simultaneous students during peak usage with average response time of 150ms. Release management, continuous integration, application performance, advanced query optimization, & database performance. 
        </p>
        <p class="text-sm">
          PHP, PostgreSQL, MySQL, MongoDB, Redis, Memcache, RabbitMQ, FOP, JSON, XML, QTI, AWS, Nginx, PHP-FPM, JS, Vue.js, JQuery, Highcharts, CSS, Bootstrap, Symfony, Ansible, Google APIs, New Relic, Google Analytics, Pusher, CDN
        </p>
      </ExpComponent>


      <h2 class="subtitle text-xl font-bold">Education</h2>

      <ExpComponent
        company="Chaffey College"
        title="Associates of Science in Computer Information Systems"
        location="Rancho Cucamonga, California"
        date="Fall 2001 - Spring 2006"
        :leftWidth="2"
        :rightWidth="3"
      >
        <p class="">
          <span class="font-semibold">Certificates:</span> Computer Information Systems (Overall CIS Certificate), Computer Support Technician, Web Page Development Level 1 - 3, Visual Basic Programmer, Network Administrator
        </p>
        <p class="">
          <span class="font-semibold">Courses:</span> A+ exam preparation, Network + exam preparation, Core MCSE exam preparation, Fundamentals of Linux, JavaScript Programming, Cascading Style Sheets, WebMaster Tools/CSS/DHTML, MS Frontpage, Electronic Commerce, Perl Programming, PHP Programming, Visual Basic and C++ Programming
        </p>
      </ExpComponent>

      <ExpComponent
        company="Eisenhower High School"
        title="High School Diploma"
        location="Rialto, California"
        date="Fall 1998 - Spring 2001"
      >
        <p class="">
          <span class="font-semibold">Relevant Coursework:</span> Business Studies, Economics, Keyboarding, Fundamentals of Microsoft Office, HTML web page design, Computer Maintenance, Drafting, AutoCAD, Graphic Design.
        </p>
      </ExpComponent>

    </div>
  </section>
</template>