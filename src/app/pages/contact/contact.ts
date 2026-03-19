import { Component, OnInit, inject, ViewChild, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent implements OnInit, OnDestroy {
  lang = inject(LanguageService);
  cdr = inject(ChangeDetectorRef);

  @ViewChild('canvasRef', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  // Form Data
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // Status
  isSending = false;
  status: 'idle' | 'success' | 'error' = 'idle';

  private readonly SERVICE_ID = 'service_chbfpkd';
  private readonly TEMPLATE_ID = 'template_v9edsqb';
  private readonly PUBLIC_KEY = 'CdWC8n0OwbvGp1-mj';

  ngOnInit() {
    this.initCanvas();
    window.addEventListener('resize', this.onResize);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize);
  }

  sendEmail(e: Event) {
    e.preventDefault();
    if (this.isSending) return;

    this.isSending = true;
    this.status = 'idle';
    this.cdr.detectChanges();

    const combinedMessage = `De / From: ${this.formData.name}\nCorreo / Email: ${this.formData.email}\n\nMensaje / Message:\n${this.formData.message}`;

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      {
        from_name: this.formData.name,
        reply_to: this.formData.email,
        message: combinedMessage,
        to_name: 'Flowform Admin'
      },
      {
        publicKey: this.PUBLIC_KEY
      }
    )
    .then((response: any) => {
      console.log('SUCCESS!', response.status, response.text);
      this.status = 'success';
      this.formData = { name: '', email: '', message: '' };
    })
    .catch((error: any) => {
      console.error('EmailJS Error:', error);
      this.status = 'error';
    })
    .finally(() => {
      this.isSending = false;
      this.cdr.detectChanges();
      
      // Reset status after some time
      setTimeout(() => { 
        if (this.status !== 'idle') {
          this.status = 'idle'; 
          this.cdr.detectChanges();
        }
      }, 5000);
    });
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
