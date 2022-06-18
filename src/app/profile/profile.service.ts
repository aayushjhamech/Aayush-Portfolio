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
      tech: 'React, Node, MongoDB, Express'
    },

  ]
  about = `Backend Developer with 3 years of experience, worked on projects with London Stock Exchange and Anthem. Skilled in Python, Java,
  Exception Handling, AWS, Docker, MySQL and Data Structures. Short experience on Angular and React. Experience of working with international clients and agile teams`

  resumeurl = "https://drive.google.com/file/d/154HGuvHTMv3OB-IA6PH_gmpjiGfwJBR1/view?usp=sharing"

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
      'info': ` The High School was mainly focused on physics, mathematics, and Chemistry
      Completed my high school with 87.4%.`
    },
  ];
  exprienceData: any = [
    {
      id: 2,
      company: 'Deloitte India Consulting (USI)',
      location: 'Bengaluru, KA',
      timeline: 'Nov 2021- Present',
      role: 'Backend Developer',
      work: `Technologies : Python, Angular, AWS . 
      Creating efficient rules using Python-Pandas, AWS S3 and Lambda .
      Configuration of states to use as input in Python code .
      API Testing with use cases using Postman .
      Deploying code using AWS Lambda and Cloud9 .
      Migration of application to production using BitBucket and OpenShift. 
  `
    },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Bengaluru, KA',
      timeline: 'June 2019 - Oct 2021',
      role: 'System Engineer',
      work: `Technologies : Java, MySQL, Jenkins . 
  
  Refinitiv Project: Software Development and Testing from scratch .
  Setup new backup system. 25% increased resiliency . 
  Enhancement of existing code. 5% increased efficiency .
  Automated 3 different functionalities .
  Handle KTLOs and Production issues.`
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
