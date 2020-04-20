import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lang-toggle',
  templateUrl: './lang-toggle.component.html',
  styleUrls: ['./lang-toggle.component.css']
})
export class LangToggleComponent implements OnInit {

  constructor(private translate: TranslateService) {
 
  }

  ngOnInit() {
  }
  changeLanguage(lang) {
    this.translate.use(lang);
  }
}
