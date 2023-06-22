import {images} from '../../assets/index'
import * as SomeModule from 'react-icons/fa';
import * as SomeModule2 from 'react-icons/bs';
import { useState } from 'react';
import Titles from '../../components/title.component';
const data = [
    {
        id:0,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        department: "Minister",
        position: "Minister Of Education",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [1, 2],
        peoplesUnderPosition:'State Ministers',
        offices: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
        officesName: 'Minister Offices and Corporate Management'
    },

    {
        id:1,
        name: 'Dr.Samuel Kifle (PhD)',
        image: "https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-45-11_1634042555.jpg",
        department: "Higher Education Development Sector",
        position: "Higher Education Minister",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [3, 4, 5, 6],
        peoplesUnderPosition:'Executive Offices',
        offices: [],
        officesName: ''
    },
    {
        id:2,
        name: 'Dr.Fanta Mandefro (PhD)',
        image: 'https://moe.gov.et/storage/minimsg/photo_2021-10-12_15-33-45_1634042442.jpg',
        department: "General Education Development Sector",
        position: "General Education Minister",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [7, 8, 9, 10],
        peoplesUnderPosition:'Executive Offices'
    },

    {
        id:3,
        name: 'Eba Mijena (PhD)',
        image: images.EbaMijena,
        department: "Acadamic Affairs",
        position: "CEO of Acadamic Affairs",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [11, 12, 13, 14],
        peoplesUnderPosition:'Desks'
    },
    {
        id:4,
        name: 'Solomon Benor (PhD)',
        image: images.Solomon2,
        department: "Research and Community Engagement",
        position: "CEO of Research and Community Engagement",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [15, 16, 17, 18],
        peoplesUnderPosition:'Desks'
    },
    {
        id:5,
        name: 'Solomon Abrha (PhD)',
        image: images.Solomon1,
        department: "Governance and Infrastructure",
        position: "CEO of Governance and Infrastructure",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [19, 20, 21, 22],
        peoplesUnderPosition:'Desks'
    },
    {
        id:6,
        name: 'Zelalem Asefa (PhD)',
        image: images.Zelalem1,
        department: "ICT and Digital Education",
        position: "CEO of ICT and Digital Education",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [23, 24, 25, 26, 27],
        peoplesUnderPosition:'Desks'
    },

    {
        id:7,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        department: "Curriculum Development",
        position: "Head Of Curriculum Development",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [28, 29, 30, 31],
        peoplesUnderPosition:'Desks'
    },
    {
        id:8,
        name: 'Muluken Nigatu (Phd)',
        image: images.Muluken,
        department: "Teacher's and Educational Leader's Development",
        position: "CEO of Teacher's and Educational Leader's Development",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [32, 33, 34],
        peoplesUnderPosition:'Desks'
    },
    {
        id:9,
        name: 'Mr.Yohannes Wogaso',
        image: images.Yohannes,
        department: "Educational Program and Quality Improvement",
        position: "CEO of Educational Program and Quality Improvement",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [35, 36, 37, 38],
        peoplesUnderPosition:'Desks'
    },
    {
        id:10,
        name: 'Mr.Yoseph Abera',
        image: images.Yoseph,
        department: "Adult and Non-Formal Education Programe",
        position: "CEO of Adult and Non-Formal Education Programe",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [39, 40],
        peoplesUnderPosition:'Desks'
    },

    {
        id:11,
        name: 'Mr.Seid Mohammed',
        image: images.Seid,
        department: "Competency and Quality Improvement Desk",
        position: "Competency and Quality Improvement Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:12,
        name: 'Mr.Tesfaye Negawo',
        image: images.Tesfaye,
        department: "Curriculum and Program Desk",
        position: "Head of Curriculum and Program Desk",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:'Desks'
    },
    {
        id:13,
        name: 'Mr.Beyene Tezera',
        image: images.Beyene,
        department: "Teachers and Students Development Desk",
        position: "Teachers and Students Development Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:14,
        name: 'Eyob Ayenew',
        image: images.Eyob,
        department: "Private Higher Education Institutions Service Desk",
        position: "Private Higher Education Institutions Service Desk Head ",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    
    {
        id:15,
        name: 'Serawit Handiso (PhD)',
        image: images.Serawit,
        department: "Research and Extension Desk",
        position: "Research and Extension Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:16,
        name: 'Abule Takele (PhD)',
        image: images.Abule,
        department: "Research Ethics Desk",
        position: "Research Ethics Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:17,
        name: 'Mr.Teshome Daniel',
        image: images.Teshome,
        department: "Institutional Linkage and Technology Transfer Desk",
        position: "Institutional Linkage and Technology Transfer Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:18,
        name: 'Mrs.Selam Alemu',
        image: images.Selam,
        department: "Community Engagement and Indigenous Knowledge Desk",
        position: "Community Engagement and Indigenous Knowledge Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:19,
        name: 'Mr.Abdonasir Haji',
        image: images.Abdonasir,
        department: "Administration Affairs Desk",
        position: "Administration Affairs Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:20,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        department: "Institutional Structure and Leadership Desk",
        position: "Institutional Structure and Leadership Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:21,
        name: 'Mr.Zewdu Kassa',
        image: images.Zewdu,
        department: "Infrastructure and Supply Desk",
        position: "Infrastructure and Supply Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:22,
        name: 'Idossa Terfassa (PhD)',
        image: images.Idossa,
        department: "Scholarship and Internalization Desk",
        position: "Scholarship and Internalization Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:23,
        name: 'Mr.Elias Gebre Mariam',
        image: images.Elias,
        department: "Education Multimedia Program Production Desk",
        position: "Head  Of Education Multimedia Program Production Desk",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:24,
        name: 'Solomon Wondimu',
        image: images.Solomon3,
        department: "School Net and ICT desk",
        position: "Head of  School Net and ICT desk",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:25,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        department: "Education Media Studio Operation and Adminstration Desk",
        position: "Education Media Studio Operation and Adminstration Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:26,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        department: "Network Technical Desk",
        position: "Network Technical Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:27,
        name: 'H.E Pr.Brihanu Nega',
        image: 'https://moe.gov.et/storage/minimsg/%E1%8C%B0%E1%8C%B0%E1%8C%B02014_1634039719.jpg',
        department: "Network Operation Desk",
        position: "Network Operation Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:28,
        name: 'Mrs.Aster Berhe',
        image: images.Aster,
        department: "Language and Co-curricular Education curriculm Desk",
        position: "Language and Co-curricular Education curriculm Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:29,
        name: 'Mr.Oumer Eimam',
        image: images.Oumer,
        department: "Social science Education curriculm Desk",
        position: "Social science Education curriculm Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:30,
        name: 'Mrs. Zafu Abrha',
        image: images.Zafu,
        department: "Natural science  Education curriculm Desk",
        position: "Natural science  Education curriculm Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:31,
        name: 'Mr.Matebie Alemayehu',
        image: images.Matebie,
        department: "Career and Techincal Education Curriculm Desk",
        position: "Career and Techincal Education Curriculm Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:32,
        name: 'Mrs.Aseged Meressa',
        image: images.Aseged,
        department: "Teachers and School Leaders Development Desk",
        position: "Teachers and School Leaders Development Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:33,
        name: 'Mrs.Haregua Mamo',
        image: images.Haregua,
        department: "Education language Development Desk",
        position: "Education language Development Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:34,
        name: 'Mr.Tadesse Teressa',
        image: images.Tadesse,
        department: "STEAM Desk",
        position: "STEAM Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:35,
        name: 'Taye Girma',
        image: images.Taye,
        department: "Education Program and Quality Improvement Desk",
        position: "Head of Education Program and Quality Improvement Desk",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:36,
        name: 'Mrs.Meseret Bekele',
        image: images.Meseret,
        department: "Pastoralist and Special Needs Education Desk",
        position: "Pastoralist and Special Needs Education Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:37,
        name: 'Mr.Dawit Azene',
        image: images.Dawit,
        department: "Educational infrastructure &service desk",
        position: "Educational infrastructure &service desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:38,
        name: 'Mr.Asfaw Mekonnen',
        image: images.Asfaw,
        department: "General Education Inspection Desk",
        position: "General Education Inspection Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:39,
        name: 'Mrs.Bekelech Tesfaye',
        image: images.Bekelech,
        department: "Adult Basic Education Programme Desk",
        position: "Adult Basic Education Programme Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:40,
        name: 'Mr.Zelalem Alagaw',
        image: images.Zelalem,
        department: "Non formal and lifelong Educational Programs Desk",
        position: "Non formal and lifelong Educational Programs Desk Head",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:41,
        name: 'Yibeltal Ayalew (PhD)',
        image: images.Yibeltal,
        department: "Corporate Managment",
        position: "CEO of Corporate Managment",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:42,
        name: 'Mr.Addisu Tesfaye',
        image: images.Addisu,
        department: "Procurement Office",
        position: "Executive of Procurement Office",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:43,
        name: 'Mr.Samuel Asmamaw',
        image: images.Samuel,
        department: "Human Resource, competence and  Managment Executive",
        position: "Human Resource, competence and  Managment Executive Officer",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:44,
        name: 'Mr.Eyob Tamiru',
        image: images.Eyob2,
        department: "Finance Executive",
        position: "Head of Finance Executive",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:45,
        name: 'Mr.Sebsib Lemma',
        image: images.Sebsib,
        department: "Education Information Managment System and ICT Executive",
        position: "Education Information Managment System and ICT Executive",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },

    {
        id:46,
        name: 'Mr. Mezgebu Biazen',
        image: images.Mezgebu,
        department: "Strategic Affairs",
        position: "Executive for Strategic Affairs",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:47,
        name: 'Mrs.Amelework Hizkeal',
        image: images.Amelework,
        department: "Public relation and Communication Executive",
        position: "Public relation and Communication Executive Officer",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:48,
        name: 'Mrs.Netsanet Kassahun',
        image: images.Netsanet,
        department: "Ethics Monitoring Office",
        position: "Ethics Monitoring Executive Officer",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    },
    {
        id:49,
        name: 'Mrs.Desta Gurmu',
        image: images.Desta,
        department: "Audit Excutive",
        position: "Audit Excutive Officer",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    }, 

    {
        id:50,
        name: 'Mr.Solomon Abate',
        image: images.Solomon,
        department: "Transport and Delivery Service",
        position: "Head of Transport and Delivery Service",
        story: "Lorem ipsum dolor sit Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, explicabo id porro soluta asperiores tempore, cupiditate fuga obcaecati rem magni hic ipsum aspernatur aliquid ratione earum minus rerum natus distinctio.amet consectetur adipisicing elit. Ipsam odit nesciunt dolores laudantium autem? Officiis explicabo adipisci architecto deserunt culpa."
        , youtubeLink: "youtube.com",
        facebookLink: "facebook.com",
        twitterLink: "twitter.com",
        peoplesUnder: [],
        peoplesUnderPosition:''
    }
]


export const PeopleUnder = ({data,action}) => {
    const {name,image,position} = data

    return (
        <div className="text-center mb-5">
            <div className="rounded-md overflow-hidden mr-10">
                <img className='h-[300px] w-full object-cover' src={image} alt={name} />
            </div>
            <div className="text-center text-gray-700">
                <span><strong>{name}</strong></span><br />
                <span className='text-light'>{position}</span>
            </div>
            <p className='text-[#156584] hover:cursor-pointer' onClick={action}><strong>See more...</strong></p>
        </div>
    )

}

function WhoIsWho() {

    const [profileData, setProfileData] = useState(0)

    const header = {
        title: 'Who is Who',
        subtitle: 'Who is Who at MoE'
    }

    return (
        <>
            <nav>
                <ol className="bg-gray-100 flex gap-2 justify-end p-5 text-sm text-[#156584]">
                    <li className='flex gap-2'>
                        <a href="#">Home</a>
                        <span>{">"}</span>
                    </li>
                    <li className='flex gap-2'>
                        <p>Who-is-Who</p>
                        <span>{">"}</span>
                    </li>
                    <li className=''>
                        <p>{data[profileData].name}</p>
                    </li>
                </ol>
            </nav>
            <div className='p-20'>
                <Titles title={header.title} subtitle={header.subtitle} />
            </div>
            <div className="mx-20 text-[#156584]">
                <h2 className='text-[30px] mb-5 underline'>{data[profileData].department}</h2>
                <div className="grid grid-cols-5">
                    <div className='col-span-3'>
                        <div className='flex gap-10 items-center'>
                            <div className='w-[300px] h-[300px] min-w-fit rounded-full overflow-hidden'>
                                <img src={data[profileData].image} className='h-[300px] w-[300px] object-cover' alt="avator" />
                            </div>
                            <div className='pr-4'>
                                <h2 className='text-lg font-bold'>{data[profileData].name}</h2>
                                <span className='text-base font-light'>{data[profileData].position}</span>
                            </div>
                        </div>
                        <p className='mt-10'>
                            {data[profileData].story}
                        </p>
                    </div>
                    <div className='col-span-2 border-l border-gray-300'>
                        <div className='px-5'>
                            <h2 className='mb-3'>Qiuck Access</h2>
                            <ul className='h-96 overflow-y-scroll'>
                                {data.map((person) => (
                                    <li className='mb-3 cursor-pointer' onClick={()=>setProfileData(person.id)}>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-[50px] h-[50px] rounded-sm min-w-fit overflow-hidden'>
                                                <img src={person.image} className='w-[50px] h-[50px] object-cover' alt='avator' />
                                            </div>
                                            <div className='text-gray-700'>
                                                <h2 className='text-md font-semibold'>{person.name}</h2>
                                                <span className='text-sm font-extralight'>{person.position}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-5 my-10">
                    <a href={data[profileData].facebookLink} className="px-12 py-[6px] bg-[#156584] rounded-sm">
                        <SomeModule.FaFacebookF className='text-white text-xl' />
                    </a>
                    <a href={data[profileData].twitterLink} className="px-12 py-[6px] bg-[#156584] rounded-sm">
                        <SomeModule.FaTwitter className='text-white text-xl' />
                    </a>
                    <a href={data[profileData].youtubeLink} className="px-12 py-[6px] bg-[#156584] rounded-sm">
                        <SomeModule2.BsYoutube className='text-white text-xl' />
                    </a>
                </div>
                <div>
                <div className='flex flex-col gap-5'>
                    <h2 className='text-[30px] mb-5'><span className='border-b-2 border-[#156584]'>{data[profileData].peoplesUnderPosition}</span></h2>
                    <div className='grid md:grid-cols-3'>
                        {data[profileData].peoplesUnder.map((person,index) => (
                            <PeopleUnder data={data[data[profileData].peoplesUnder[index]]} action={()=>setProfileData(data[data[profileData].peoplesUnder[index]].id)}/>
                        ))}
                    </div>
                </div>
                {data[profileData].offices ?
                    (
                        <div>
                            <h2 className='text-[30px] mb-5'><span className='border-b-2 border-[#156584]'>{data[profileData].officesName}</span></h2>
                            <div className='grid md:grid-cols-3'>
                                {data[profileData].offices.map((person,index) => (
                                    <PeopleUnder data={data[data[profileData].offices[index]]} action={()=>setProfileData(data[data[profileData].offices[index]].id)}/>
                                ))}
                            </div>
                        </div>
                    ) : null
                }
                </div>
            </div>
        </>
    )
}

export default WhoIsWho

