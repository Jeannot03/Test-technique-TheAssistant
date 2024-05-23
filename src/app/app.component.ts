import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from './data/donnees'; // Importez votre classe Personne
import data from './data/data.json'; // Importez vos données JSON

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule] // Ajoutez les imports nécessaires pour un composant autonome
})
export class AppComponent {
  teachers: Personne[]; // Déclarez les propriétés teachers et students avec le type Personne
  students: Personne[];

  constructor() {
    this.teachers = data.filter((item: Personne) => item.isTeacher); // Filtrez les enseignants
    this.students = data.filter((item: Personne) => !item.isTeacher); // Filtrez les élèves

    // Affichez les données dans la console
    console.log('Teachers:', this.teachers);
    console.log('Students:', this.students);
  }
}
