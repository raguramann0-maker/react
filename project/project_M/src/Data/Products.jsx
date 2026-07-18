import React from "react";
import Aspirin from "../image/Aspirin.jpeg";
import Amoxycillin from "../image/Amoxycillin.jpeg";
import Cetirizine from "../image/Centirizine.jpeg";
import Azithromycin from "../image/Azitromycin.jpeg";
import Dolo650 from "../image/Dolo 650.jpeg";
import Insulin from "../image/Insulin.jpeg";
import ORS from "../image/ORS.jpeg";
import Pantoprazole from "../image/Pantoprazole.jpeg";
import Paracetamol from "../image/paracetamol.jpeg";
import Ibuprofen from "../image/Ibuprofen.jpeg";
import Metformin from "../image/Metformin.jpeg";
import Omeprazole from "../image/Omeprazole.jpeg";
import VitaminC from "../image/vitamin c.jpeg";
import Zinc from "../image/Zinc.jpeg";
import CoughSyrup from "../image/syrup.jpeg";
import "./Product.css";



const products = [
  {
    id: 1,
    name: "Paracetamol",
    price: 50,
    image: Paracetamol,
    problem: "Fever and Body Pain",
    usage: "Used to reduce fever and pain",
    when: "After food when fever occurs",
    dosage: "1 tablet twice a day",
    sideEffects: "Nausea, stomach pain"
  },

  {
    id: 2,
    name: "Amoxicillin",
    price: 120,
    image: Amoxycillin,
    problem: "Bacterial Infection",
    usage: "Antibiotic medicine",
    when: "Doctor prescription only",
    dosage: "1 capsule three times daily",
    sideEffects: "Vomiting, diarrhea"
  },

  {
    id: 3,
    name: "Cetirizine",
    price: 40,
    image: Cetirizine ,
    problem: "Allergy",
    usage: "Relieves allergy symptoms",
    when: "Before sleep",
    dosage: "1 tablet daily",
    sideEffects: "Sleepiness"
  },

  {
    id: 4,
    name: "Omeprazole",
    price: 90,
    image: Omeprazole,
    problem: "Acidity",
    usage: "Reduces stomach acid",
    when: "Before breakfast",
    dosage: "1 capsule daily",
    sideEffects: "Headache"
  },

  {
    id: 5,
    name: "Ibuprofen",
    price: 80,
    image: Ibuprofen,
    problem: "Pain and Swelling",
    usage: "Pain killer",
    when: "After food",
    dosage: "1 tablet twice daily",
    sideEffects: "Stomach irritation"
  },

  {
    id: 6,
    name: "Metformin",
    price: 150,
    image: Metformin,
    problem: "Diabetes",
    usage: "Controls blood sugar",
    when: "After meals",
    dosage: "500mg daily",
    sideEffects: "Loose motion"
  },

  {
    id: 7,
    name: "Azithromycin",
    price: 200,
    image: Azithromycin,
    problem: "Throat Infection",
    usage: "Antibiotic",
    when: "Once daily",
    dosage: "500mg for 3 days",
    sideEffects: "Vomiting"
  },

  {
    id: 8,
    name: "Dolo 650",
    price: 35,
    image: Dolo650,
    problem: "Fever",
    usage: "Fever reducer",
    when: "When temperature increases",
    dosage: "1 tablet",
    sideEffects: "Liver damage if overused"
  },

  {
    id: 9,
    name: "Insulin",
    price: 500,
    image: Insulin,
    problem: "Diabetes",
    usage: "Controls sugar level",
    when: "Before food",
    dosage: "As doctor advice",
    sideEffects: "Low sugar"
  },

  {
    id: 10,
    name: "ORS Powder",
    price: 20,
    image: ORS,
    problem: "Dehydration",
    usage: "Restores body fluids",
    when: "During diarrhea",
    dosage: "Mix with water",
    sideEffects: "No major side effects"
  },

  {
    id: 11,
    name: "Vitamin C",
    price: 100,
    image: VitaminC,
    problem: "Low Immunity",
    usage: "Boosts immunity",
    when: "Morning after food",
    dosage: "1 tablet daily",
    sideEffects: "Acidity"
  },

  {
    id: 12,
    name: "Cough Syrup",
    price: 90,
    image: CoughSyrup,
    problem: "Cough",
    usage: "Relieves cough",
    when: "Night time",
    dosage: "10ml",
    sideEffects: "Drowsiness"
  },

  {
    id: 13,
    name: "Pantoprazole",
    price: 110,
    image: Pantoprazole,
    problem: "Ulcer",
    usage: "Reduces acid",
    when: "Before food",
    dosage: "40mg daily",
    sideEffects: "Headache"
  },

  {
    id: 14,
    name: "Zinc Tablets",
    price: 60,
    image: Zinc,
    problem: "Weak Immunity",
    usage: "Improves immunity",
    when: "After food",
    dosage: "1 tablet daily",
    sideEffects: "Nausea"
  },

  {
    id: 15,
    name: "Aspirin",
    price: 70,
    image: Aspirin,
    problem: "Heart Protection",
    usage: "Prevents blood clot",
    when: "Doctor advice",
    dosage: "75mg daily",
    sideEffects: "Bleeding risk"
  }
];

export default products;