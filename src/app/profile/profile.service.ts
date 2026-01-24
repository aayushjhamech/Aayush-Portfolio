import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Library Management System',
      desc: '',
      githurl: 'https://github.com/aayushjhamech/LibraryManagement',
      imgUrl: 'assets/images/goddard-library-renew-a-book.jpg',
      tech: 'Core Java'
    },

    {
      id: 2,
      title: 'Small Python Projects',
      desc: '',
      githurl: 'https://github.com/aayushjhamech/Python-Projects',
      imgUrl: 'assets/images/python-projects.jpg',
      tech: 'Python, Angular'
    },

    {
      id: 3,
      title: 'Online Store',
      desc: '',
      githurl: 'https://github.com/aayushjhamech/spring-boot-projects/tree/master/Online-Store',
      imgUrl: 'assets/images/how-to-start-an-online-store-min.png',
      tech: 'Python, Angular'
    },
  ]
  about = `Full-Stack Java Developer with around 6.5 years of experience,
            worked in Financial and Health care domain. Skilled in Java, Spring Boot, 
            Exception Handling, AWS, Docker, MySQL and Data Structures. Hands-on experience in Angular and Full Stack Development. 
            Experience of working with international clients and agile teams.`

  resumeurl = "https://drive.google.com/file/d/1rdnxlbEw8_3kuej2_GxB_aJSVsrkF6Rp/view?usp=share_link"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'Java 8',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'Python',
      'progress': '70%'
    },
    {
      'id': '3',
      'skill': 'AWS',
      'progress': '65%'
    },
    {
      'id': '4',
      'skill': 'MYSQL,MONOGO',
      'progress': '70%'
    },
    {
      'id': '5',
      'skill': 'Angular',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'Docker, Bamboo, OpenShift',
      'progress': '60%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'info': `Completed B.Tech in Mechanical Engineering with 8.44 DGPA
      Volunteered with BloodConnect and organised multiple camps across Kolkata
      Maintained above 8 CGPA in every semester of course.`,
      'institution': 'HERITAGE INSTITUTE OF TECHNOLOGY, KOLKATA'
    },
    {
      'id': '2',
      'from_to_year': '2012 - 2014',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'JVM SHYAMLI, RANCHI',
      'info': ` The High School was mainly focused on Physics, Mathematics, and Chemistry
      Completed 12th Board with 87.4%.`
    }
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'Cognizant Technology Solutons',
      location: 'Bengaluru, KA',
      timeline: 'Sep 2024 - Present',
      role: 'Full-Stack Developer | Technologies : Java 11, JavaScript, SpringBoot, DB2, Angular',
      work: `
      5 Client Appreciations
      • Architected and deployed 3 high-scale full-stack applications using Java/SpringBoot; optimized
        system bottlenecks to achieve ~15% throughput improvement and 95% uptime for 10k+ active users.
      • Delivered 5 critical new features in 3 months, which increased user engagement by 30% and boosted
        customer satisfaction scores by 15 points, exceeding project expectations.
      • Spearheaded the transformation of a legacy monolithic system into a Cloud-native Microservices
        architecture, reducing operational overhead by 25% and doubling system performance through improved
        resource utilization.
      • Implemented Redis Caching in backend APIs to reduce page load time by 40% and improved experience of
        50k+ users.
  `
    },

    {
      id: 2,
      company: 'Deloitte India Consulting (USI)',
      location: 'Bengaluru, KA',
      timeline: 'Nov 2021- Sep 2024',
      role: 'Full-Stack Developer | Technologies : Java 11, Angular, AWS, SpringBoot, MongoDB',
      work: `
      • Successfully led a team of 2 analysts resulting in the timely delivery of the completed flow to the E2E team.
      • Developed and implemented solutions for multiple modules, leveraging diverse tech stacks and
        problem-solving skills to drive project success.
      • Refactored code to optimize cloud tool utilization, resulting in improved efficiency and scalability.
      • Engineered a CDC pipeline using Qlik and AWS Kinesis to enable real-time data synchronization;
        developed high-performance Restful APIs to facilitate seamless data exchange across distributed
        systems.
      • Improved the performance of low performing flows by 23%, resulting in significant productivity gains and
        cost savings.
      • Independently developed a feature that enabled customers to edit their application details, enhancing user
        experience and satisfaction.
      • Managed build plans and deployments to higher environments, including Pre-Prod, ensuring seamless and
        efficient software delivery.
      • Earned 2 Spot Awards and 1 promotion for all tasks achieved.
  `
    },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Bengaluru, KA',
      timeline: 'June 2019 - Oct 2021',
      role: 'System Engineer | Technologies : Java, MySQL, Jenkins',
      work: ` 
      • Collaborated with clients to gather and validate requirements, resulting in a 25% reduction in project
        timelines.
      • Designed and developed scalable REST APIs on SpringBoot, handling over 10,000 concurrent requests with
        a 99.99% uptime.
      • Crafted and integrated MongoDB queries for CRUD operations into SpringBoot, increasing data retrieval
        efficiency by 30%.
      • Managed UI changes and integrations, ensuring seamless user experience and a 20% reduction in support
        requests.
      • Utilized JUnits for comprehensive test cases and Sonar for code quality and coverage, achieving a 95% code
        coverage rate and a 25% reduction in bugs.
      • Created multiple Jasper Reports for varying functionalities, resulting in a 40% increase in report adoption and a
        25% reduction in manual reporting time.
    },`
    }


  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
