import { Component, OnInit, inject, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit, OnDestroy {
  lang = inject(LanguageService);

  @ViewChild('canvasRef', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {
    this.initCanvas();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

  initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  onResize = () => {
    const canvas = this.canvasRef.nativeElement;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
}
