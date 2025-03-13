import { Component, OnInit } from '@angular/core';
import {Itab} from '../models/tab';

@Component({
  selector: 'app-tab-ngif-for',
  templateUrl: './tab-ngif-for.component.html',
  styleUrls: ['./tab-ngif-for.component.scss']
})
export class TabNgifForComponent implements OnInit {

 skillsArr:Array<Itab> = [

  {
    skillName: 'html',
    skillInfo:`<strong>HTML</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet eius,
                tempora repudiandae consectetur quasi dolorum magni animi iusto itaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet eius,
                tempora repudiandae consectetur quasi dolorum magni animi iusto itaque!`
  },
  
  {
    skillName: 'scss',
    skillInfo:`<strong>SCSS</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet eius,
                tempora repudiandae consectetur quasi dolorum magni animi iusto itaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet eius,
                tempora repudiandae consectetur quasi dolorum magni animi iusto itaque!`
  },

  {
    skillName: 'typescript',
    skillInfo:`<strong>Typescsscript</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet eius,
                tempora repudiandae consectetur quasi dolorum magni animi iusto itaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet eius,
                tempora repudiandae consectetur quasi dolorum magni animi iusto itaque!`
  },

  {
    skillName: 'angular',
    skillInfo:`<strong>Angular</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet eius,
                tempora repudiandae consectetur quasi dolorum magni animi iusto itaque!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum amet eius,
                tempora repudiandae consectetur quasi dolorum magni animi iusto itaque!`
  },

 ]

  selectData = this.skillsArr[3].skillName
  constructor() { }

  ngOnInit(): void {
  }

}
