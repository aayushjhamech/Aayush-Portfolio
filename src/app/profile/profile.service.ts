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
      title: 'Automated Trading Platform',
      desc: 'Built an intraday trading platform with real-time market data ingestion, configurable strategy engine, risk controls, portfolio tracking, PnL calculation and React dashboard.',
      githurl: 'https://github.com/aayushjhamech/PaperTrading_Backend',
      imgUrl: 'assets/images/trading-platform.png',
      tech: 'Java, Spring Boot, React, PostgreSQL, Docker, REST APIs'
    },
    {
      id: 2,
      title: 'Booking Platform - Distributed Movie Ticket System',
      desc: 'Designed a high-concurrency ticket booking system with Redis-based seat locking, Kafka-driven booking lifecycle, idempotent payment APIs and microservices architecture.',
      githurl: 'https://github.com/aayushjhamech/BookingPlatform',
      imgUrl: 'assets/images/booking-platform.png',
      tech: 'Java, Spring Boot, Microservices, Redis, Kafka, PostgreSQL, Docker'
    },
    {
      id: 3,
      title: 'Neighborhood Skill and Tool Sharing',
      desc: 'Built a full-stack community sharing platform with secure identity layer, Redis caching, REST APIs and scalable workflows for listing, request, approval and return lifecycle.',
      githurl: '',
      imgUrl: 'assets/images/community-sharing.png',
      tech: 'Java, Spring Boot, React, Redis, Microservices'
    }
  ];
  about = `Senior Java Full Stack Engineer with 7 years of experience building scalable, high-concurrency distributed systems using Java, Spring Boot, React, Angular and AWS.
  Strong experience in microservices architecture, REST APIs, real-time data pipelines, caching, event-driven systems and cloud-native application development.
  Worked across Banking and Healthcare domains with proven delivery ownership, production support, CI/CD exposure and award-winning performance.`;

  resumeurl = "https://drive.google.com/file/d/1rdnxlbEw8_3kuej2_GxB_aJSVsrkF6Rp/view?usp=share_link"

  skillsData: any = [
    { id: '1', skill: 'Java 8/11, Spring Boot, Microservices', progress: '90%' },
    { id: '2', skill: 'REST APIs, JPA/Hibernate, System Design', progress: '88%' },
    { id: '3', skill: 'React, Angular, JavaScript', progress: '80%' },
    { id: '4', skill: 'AWS S3, CloudWatch, Kinesis, CI/CD', progress: '75%' },
    { id: '5', skill: 'PostgreSQL, MySQL, MongoDB, Redis', progress: '82%' },
    { id: '6', skill: 'Kafka, Docker, JUnit, Mockito, SonarQube', progress: '78%' }
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
  experienceData: any = [
    {
      id: 3,
      company: 'Cognizant Technology Solutions',
      location: 'Bengaluru, KA',
      timeline: 'Sep 2024 - Present',
      role: 'Full-Stack Developer | Technologies : Java 11, JavaScript, SpringBoot, DB2, Angular',
      work: [
        'Designed and optimized scalable APIs with focus on low latency, idempotency, fault tolerance and observability.',
        'Architected full-stack applications using Java Spring Boot and React, improving throughput by ~15% for high-concurrency use cases.',
        'Delivered backend APIs and frontend features across multiple workflows, improving user engagement and customer satisfaction.',
        'Implemented Redis-based caching to reduce API latency and improve page load performance for large user volumes.'
      ]
    },

    {
      id: 2,
      company: 'Deloitte India Consulting (USI)',
      location: 'Bengaluru, KA',
      timeline: 'Nov 2021- Sep 2024',
      role: 'Full-Stack Developer | Technologies : Java 11, Angular, AWS, SpringBoot, MongoDB',
      work: [
        'Designed and developed scalable REST microservices using Java Spring Boot for distributed enterprise systems.',
        'Engineered a near real-time CDC pipeline using Qlik and AWS Kinesis, reducing dependency on batch-based synchronization.',
        'Led 2 engineers for critical workflow delivery and integration with upstream and downstream systems.',
        'Improved critical workflow performance by 23% and received 2 Spot Awards for delivery excellence.'
      ]
    },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Bengaluru, KA',
      timeline: 'June 2019 - Oct 2021',
      role: 'System Engineer | Technologies : Java, MySQL, Jenkins',
      work: [
        'Developed Java Spring Boot REST APIs and integrated MongoDB/MySQL data operations for enterprise applications.',
        'Improved data retrieval efficiency, test coverage and code quality using JUnit, SonarQube and structured defect resolution.',
        'Worked directly with clients for requirement validation, reducing delivery gaps and improving project timelines.',
        'Built Jasper Reports and UI integrations that reduced manual reporting effort and support requests.'
      ]
    }

]

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

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'experience');
    return this.experienceData;
  }

sendContactMessage(data: any): Observable<any> {
      const payload = {
        service_id: environment.emailJsServiceId,
        template_id: environment.emailJsTemplateId,
        user_id: environment.emailJsPublicKey,
        template_params: {
          to_email: 'aayushjhamech@gmail.com',
          from_name: data.name,
          from_email: data.email,
          reply_to: data.email,
          subject: data.subject,
          message: data.message,
          website: 'aayushjha.gt.tc'
        }
      };

      return this.http.post('https://api.emailjs.com/api/v1.0/email/send', payload, {
        responseType: 'text'
      });
}

}
