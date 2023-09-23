import { Component} from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  usuario:any = null
  mensajesTraidos: any[] = []
  mensajeAEnviar = ""

  constructor(private chatService: ChatService, public userService: UserService) {
   this.chatService.TraerChats().subscribe(mensajes => {
      this.mensajesTraidos = mensajes;
      setTimeout(() => {
        this.scrollToTheLastElementByClassName();
      }, 3);
    })
  }
  
  ngOnInit() {
    this.userService.user$.subscribe((user:any) => {
      if(user){
        this.usuario = user
      }
      else{
        this.usuario = null
      }
    })
  }

  EnviarMensaje() {
    const mensaje = {
      usuario:this.usuario,
      mensaje:this.mensajeAEnviar,
      fecha:moment().format('MMMM Do YYYY, h:mm:ss a')
    }

    this.chatService.GuardarChat(mensaje);
    this.mensajeAEnviar = "";
    this.scrollToTheLastElementByClassName();
  }

  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('mensajes');
    let ultimo:any = elements[(elements.length - 1)];
    let toppos = ultimo.offsetTop;
    //@ts-ignore
    document.getElementById('card-body').scrollTop = toppos;
  }
}
