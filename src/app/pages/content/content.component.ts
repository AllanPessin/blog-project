import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { data } from "../../data/data.fake";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  private id: string | null = '0'
  cover: string = ''
  title: string = ''
  description: string = ''

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get('id')
    )

    this.setValeusToComponent(this.id)
  }

  setValeusToComponent(id: string | null) {
    const result = data.filter(article => article.id == id)[0]
    this.cover = result.cover
    this.title = result.title
    this.description = result.description
  }
}
