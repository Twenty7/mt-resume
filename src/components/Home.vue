<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import ExpComponent from '../components/ExpComponent.vue';
  import References from './References.vue';

</script>
<template>
  <section class="container mx-auto mt-resume">

    <div class="p-10 mx-auto text-left border inner-container bg-base-100 border-base-300 rounded-box">


      <div class="flex">
        <div class="flex-auto w-1">
          <div class="text-lg font-bold subtitle">
            Matthew Taylor
          </div>
          <div>
            <FontAwesomeIcon :icon="['fa', 'house']" /> 1210 El Paseo, Foothill Ranch, CA 92610
          </div>
          <div>
            <FontAwesomeIcon :icon="['fa', 'globe']" /> <a href="http://mt.eight9.net">mt.eight9.net</a>
          </div>
        </div>
        <div class="flex-auto w-1 text-right">
          <div class="text-lg font-semibold subtitle">
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

      <h2 class="mt-1 mb-1 text-lg font-bold border-b-2 subtitle border-primary">Professional Summary</h2>
      <p class="leading-normal">
        Senior Software Developer with 15+ years of professional experience architecting and delivering high-performance web applications across Education Technology, Blockchain, Energy Analytics, and Media Advertisement industries. Proven expertise in full-stack development, cloud infrastructure, and DevOps practices. Specialized in building scalable systems capable of handling 25k+ concurrent users with sub-200ms response times. Strong track record in technical leadership, system architecture, and cross-functional collaboration.
      </p>

      <h2 class="pb-1 mt-2 mb-1 text-lg font-bold border-b-2 subtitle border-primary">Core Competencies</h2>
      <div class="grid grid-cols-2 gap-1 text-xs md:grid-cols-3">
        <div class="flex items-center gap-1">
          <FontAwesomeIcon :icon="['fa', 'check-circle']" class="text-secondary" />
          <span>Remote Collaboration</span>
        </div>
        <div class="flex items-center gap-1">
          <FontAwesomeIcon :icon="['fa', 'check-circle']" class="text-secondary" />
          <span>Self-Directed Leadership</span>
        </div>
        <div class="flex items-center gap-1">
          <FontAwesomeIcon :icon="['fa', 'check-circle']" class="text-secondary" />
          <span>Rapid Technology Adoption</span>
        </div>
        <div class="flex items-center gap-1">
          <FontAwesomeIcon :icon="['fa', 'check-circle']" class="text-secondary" />
          <span>Agile Methodologies</span>
        </div>
        <div class="flex items-center gap-1">
          <FontAwesomeIcon :icon="['fa', 'check-circle']" class="text-secondary" />
          <span>Technical Mentorship</span>
        </div>
        <div class="flex items-center gap-1">
          <FontAwesomeIcon :icon="['fa', 'check-circle']" class="text-secondary" />
          <span>Problem Solving</span>
        </div>
      </div>

      <h2 class="pb-1 mt-2 mb-1 text-lg font-bold border-b-2 subtitle border-primary">Technical Expertise</h2>
      <div class="space-y-1.5">
        <div>
          <h3 class="mb-1 text-xs font-semibold text-primary">Languages & Frameworks</h3>
          <div class="flex flex-wrap gap-1.5">
            <span class="badge badge-outline badge-xs">PHP</span>
            <span class="badge badge-outline badge-xs">JavaScript/TypeScript</span>
            <span class="badge badge-outline badge-xs">Node.js</span>
            <span class="badge badge-outline badge-xs">Go</span>
            <span class="badge badge-outline badge-xs">Python</span>
            <span class="badge badge-outline badge-xs">Vue.js</span>
            <span class="badge badge-outline badge-xs">React</span>
            <span class="badge badge-outline badge-xs">Express.js</span>
            <span class="badge badge-outline badge-xs">Next.js</span>
            <span class="badge badge-outline badge-xs">Symfony</span>
          </div>
        </div>
        <div>
          <h3 class="mb-1 text-xs font-semibold text-primary">Databases & Data Storage</h3>
          <div class="flex flex-wrap gap-1.5">
            <span class="badge badge-outline badge-xs">PostgreSQL</span>
            <span class="badge badge-outline badge-xs">MySQL</span>
            <span class="badge badge-outline badge-xs">TimeScaleDB</span>
            <span class="badge badge-outline badge-xs">MongoDB</span>
            <span class="badge badge-outline badge-xs">Redis</span>
            <span class="badge badge-outline badge-xs">Elasticsearch</span>
          </div>
        </div>
        <div>
          <h3 class="mb-1 text-xs font-semibold text-primary">Cloud & Infrastructure</h3>
          <div class="flex flex-wrap gap-1.5">
            <span class="badge badge-outline badge-xs">AWS (EC2, RDS, S3, Lambda, ECS)</span>
            <span class="badge badge-outline badge-xs">Docker</span>
            <span class="badge badge-outline badge-xs">Terraform</span>
            <span class="badge badge-outline badge-xs">Ansible</span>
            <span class="badge badge-outline badge-xs">CloudFormation</span>
            <span class="badge badge-outline badge-xs">Nginx</span>
            <span class="badge badge-outline badge-xs">Traefik</span>
          </div>
        </div>
        <div>
          <h3 class="mb-1 text-xs font-semibold text-primary">DevOps & Monitoring</h3>
          <div class="flex flex-wrap gap-1.5">
            <span class="badge badge-outline badge-xs">CI/CD</span>
            <span class="badge badge-outline badge-xs">GitHub Actions</span>
            <span class="badge badge-outline badge-xs">NewRelic</span>
            <span class="badge badge-outline badge-xs">DataDog</span>
            <span class="badge badge-outline badge-xs">RabbitMQ</span>
            <span class="badge badge-outline badge-xs">SQS</span>
          </div>
        </div>
        <div>
          <h3 class="text-sm font-semibold text-primary">Frontend & Design</h3>
          <div class="flex flex-wrap gap-1.5">
            <span class="badge badge-outline badge-xs">TailwindCSS</span>
            <span class="badge badge-outline badge-xs">Bootstrap</span>
            <span class="badge badge-outline badge-xs">CSS/SCSS</span>
            <span class="badge badge-outline badge-xs">UI/UX Design</span>
          </div>
        </div>
      </div>


      <h2 class="pb-1 mt-4 mb-3 text-lg font-bold border-b-2 subtitle border-primary">Professional Experience</h2>

      <ExpComponent
        company="Eight9 Design Network INC"
        title="Founder / Software Developer"
        location="Remote"
        date="January 2024 - Current"
      >
        <p class="leading-normal">
          Founded software consulting firm delivering custom technical solutions for business clients. Primary engagement with <strong>Kelvin Education</strong> encompassed:
        </p>
        <ul class="ml-6 list-disc">
          <li>Architected and implemented authentication service for multi-tenant SaaS platform</li>
          <li>Led cloud migration of legacy monolithic application to AWS architecture</li>
          <li>Designed and developed multiple web applications and client websites</li>
        </ul>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span class="badge badge-sm badge-ghost badge-xs">PHP</span>
          <span class="badge badge-sm badge-ghost badge-xs">Node.js</span>
          <span class="badge badge-sm badge-ghost badge-xs">PostgreSQL</span>
          <span class="badge badge-sm badge-ghost badge-xs">TypeScript</span>
          <span class="badge badge-sm badge-ghost badge-xs">Vue.js</span>
          <span class="badge badge-sm badge-ghost badge-xs">React</span>
          <span class="badge badge-sm badge-ghost badge-xs">Go</span>
          <span class="badge badge-sm badge-ghost badge-xs">AWS ECS</span>
          <span class="badge badge-sm badge-ghost badge-xs">Lambda</span>
          <span class="badge badge-sm badge-ghost badge-xs">Terraform</span>
          <span class="badge badge-sm badge-ghost badge-xs">GitHub Actions</span>
        </div>
      </ExpComponent>


      <ExpComponent
        company="Lila Holdings"
        title="Software Developer / System Administrator"
        location="Remote"
        date="June 2022 - October 2024"
      >
        <p class="leading-normal">
          Built and managed production infrastructure for Blockchain Validator (Onomy Protocol):
        </p>
        <ul class="ml-6 list-disc">
          <li>Deployed and configured bare-metal server fleet in traditional datacenter environment</li>
          <li>Developed custom automation tooling for server provisioning and configuration</li>
          <li>Implemented comprehensive monitoring system for validator nodes and chain status</li>
        </ul>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span class="badge badge-sm badge-ghost badge-xs">Bash</span>
          <span class="badge badge-sm badge-ghost badge-xs">Node.js</span>
          <span class="badge badge-sm badge-ghost badge-xs">Docker</span>
          <span class="badge badge-sm badge-ghost badge-xs">Nginx</span>
          <span class="badge badge-sm badge-ghost badge-xs">Libvirt</span>
          <span class="badge badge-sm badge-ghost badge-xs">System Administration</span>
        </div>
      </ExpComponent>

      <ExpComponent
        company="Clean Energy Japan"
        title="Software Developer"
        location="Remote"
        date="November 2020 - December 2024"
      >
        <p class="leading-normal">
          Designed and developed energy analytics and monitoring platform for renewable energy systems:
        </p>
        <ul class="ml-6 list-disc">
          <li>Built real-time monitoring dashboard for Solar and Wind Turbine power analytics</li>
          <li>Implemented anomaly detection system with multi-channel notifications (SMS, Push, Slack)</li>
          <li>Integrated AI-powered computer vision for security monitoring using YOLO AI Models</li>
          <li>Architected time-series data storage solution using TimeScaleDB for high-frequency sensor data</li>
        </ul>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span class="badge badge-sm badge-ghost badge-xs">PHP</span>
          <span class="badge badge-sm badge-ghost badge-xs">Node.js</span>
          <span class="badge badge-sm badge-ghost badge-xs">PostgreSQL</span>
          <span class="badge badge-sm badge-ghost badge-xs">TimeScaleDB</span>
          <span class="badge badge-sm badge-ghost badge-xs">Vue.js</span>
          <span class="badge badge-sm badge-ghost badge-xs">AWS</span>
          <span class="badge badge-sm badge-ghost badge-xs">AI/ML Integration</span>
        </div>
      </ExpComponent>

      <ExpComponent
        company="Townsquare Media / AnalyticOwl"
        title="Software Developer"
        location="Remote"
        date="March 2019 - November 2020"
      >
        <p class="leading-normal">
          Senior Developer on 5-person engineering team building advertising analytics platform:
        </p>
        <ul class="ml-6 list-disc">
          <li>Developed full-stack features for multi-source ad data aggregation and reporting</li>
          <li>Built serverless data processing pipelines using AWS Lambda</li>
          <li>Optimized complex PostgreSQL queries to improve report generation time</li>
          <li>Implemented Vue.js dashboard with real-time analytics visualization</li>
        </ul>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span class="badge badge-sm badge-ghost badge-xs">PHP</span>
          <span class="badge badge-sm badge-ghost badge-xs">Node.js</span>
          <span class="badge badge-sm badge-ghost badge-xs">PostgreSQL</span>
          <span class="badge badge-sm badge-ghost badge-xs">Vue.js</span>
          <span class="badge badge-sm badge-ghost badge-xs">AWS Lambda</span>
          <span class="badge badge-sm badge-ghost badge-xs">Docker</span>
        </div>
      </ExpComponent>

      <ExpComponent
        company="Nordic Colocation Computing AB"
        title="Software Developer"
        location="Stockholm, Sweden"
        date="April 2018 - February 2019"
      >
        <p class="leading-normal">
          Architected infrastructure for cryptocurrency mining operations:
        </p>
        <ul class="ml-6 list-disc">
          <li>Utilized ELK Stack to build monitoring and reporting dashboard for mining operations</li>
          <li>Developed automated alerting system using RabbitMQ message queues and 3rd party APIs</li>
        </ul>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span class="badge badge-sm badge-ghost badge-xs">Go</span>
          <span class="badge badge-sm badge-ghost badge-xs">Python</span>
          <span class="badge badge-sm badge-ghost badge-xs">Docker</span>
          <span class="badge badge-sm badge-ghost badge-xs">AWS</span>
          <span class="badge badge-sm badge-ghost badge-xs">Elasticsearch</span>
          <span class="badge badge-sm badge-ghost badge-xs">RabbitMQ</span>
        </div>
      </ExpComponent>

      <ExpComponent
        company="Previous History"
        title="Manager / Software Developer"
        location="Illuminate Education, Houghton Mifflin Harcourt, Achieve! Data Solutions"
        date="2005 - 2018"
        locationClass="text-sm"
        :leftWidth="3"
        :rightWidth="2"
      >
        <p class="leading-normal">
          <strong>Combined EdTech leadership experience across Illuminate Education, Houghton Mifflin Harcourt, and Achieve! Data Solutions:</strong>
        </p>
        <ul class="ml-6 list-disc">
          <li>Led engineering teams totaling 11 developers (6 on-site, 5 remote)</li>
          <li>Architected high-performance testing platform serving 25k-30k concurrent students with 150ms avg response time</li>
          <li>Optimized complex database queries and implemented caching strategies improving system throughput</li>
          <li>Mentored junior developers in best practices, code review, and system design</li>
        </ul>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span class="badge badge-sm badge-ghost badge-xs">PHP</span>
          <span class="badge badge-sm badge-ghost badge-xs">PostgreSQL</span>
          <span class="badge badge-sm badge-ghost badge-xs">Redis</span>
          <span class="badge badge-sm badge-ghost badge-xs">Vue.js</span>
          <span class="badge badge-sm badge-ghost badge-xs">AWS</span>
          <span class="badge badge-sm badge-ghost badge-xs">Team Leadership</span>
        </div>
      </ExpComponent>


      <h2 class="mt-3 mb-1 text-lg font-bold border-b-2 subtitle border-primary">Education & Certifications</h2>

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
          <span class="text-sm font-semibold">Courses: </span>
          <span class="text-sm">A+ exam preparation, Network + exam preparation, Core MCSE exam preparation, Fundamentals of Linux, JavaScript Programming, Cascading Style Sheets, WebMaster Tools/CSS/DHTML, MS Frontpage, Electronic Commerce, Perl Programming, PHP Programming, Visual Basic and C++ Programming</span>
        </p>
      </ExpComponent>

      <ExpComponent
        company="Eisenhower High School"
        title="High School Diploma"
        location="Rialto, California"
        date="Fall 1998 - Spring 2001"
      >
        <p class="">
          <span class="font-semibold">Relevant Coursework: </span>
          <span class="text-sm">Business Studies, Economics, Keyboarding, Fundamentals of Microsoft Office, HTML web page design, Computer Maintenance, Drafting, AutoCAD, Graphic Design.</span>
        </p>
      </ExpComponent>

      <References />

    </div>
  </section>
</template>