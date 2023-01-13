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
  about = `Full-Stack Java Developer with more than 3 years of experience,
            worked in Financial and Health care domain. Skilled in Python, Java, Spring Boot, 
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
      'progress': '60%'
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
      id: 2,
      company: 'Deloitte India Consulting (USI)',
      location: 'Bengaluru, KA',
      timeline: 'Nov 2021- Present',
      role: 'Full-Stack Developer | Technologies : Java 11, Angular, AWS, SpringBoot, MongoDB',
      work: `
      Client interaction for gathering requirements .
      Creating back-end APIs on SpringBooot for new features .
      Wrote and integrated MongoDB queries for CRUD operations into SpringBoot .
      Handle corresponding UI changes and integration .
      Used Junits for test cases and Sonar for code quality and coverage .
      Created multiple Jasper Reports for varying functionalities
  `
    },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Bengaluru, KA',
      timeline: 'June 2019 - Oct 2021',
      role: 'System Engineer | Technologies : Java, MySQL, Jenkins',
      work: ` 
      Software Development and Testing from scratch .
      Software Maintenance and Testing of monolithic Java application .
      Built and released exchange pages using Core Java. 10% increased resiliency .
      Updating Configuration files for applications .
      Enhancement of existing code on Java and writing test cases. 20% increased efficiency .
      Handle KTLOs and Production issues`
    },


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
