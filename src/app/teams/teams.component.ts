import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  updateTeams(): void{
    console.log(1);
  }

}
