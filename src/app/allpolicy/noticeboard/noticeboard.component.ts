import { Component } from '@angular/core';

@Component({
  selector: 'app-noticeboard',
  standalone: true,
  imports: [],
  templateUrl: './noticeboard.component.html',
  styleUrl: './noticeboard.component.css'
})
export class NoticeboardComponent {
  day: string = '23';
  month: string = 'ก.ย.62';
  category: string = 'อัพเดทล่าสุด';
  title: string = 'เตือนเหตุการณ์';
  subtitle: string = 'Charlie Real Time';

  newsItems = [
    {
      imageUrl: 'https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/69858952_2476709132393709_5485951956130201600_n.jpg?_nc_cat=103&_nc_eui2=AeGJtCrUINeULr5S1zQhc6ilemJABQoFrYDvpICb6tIGJ5AYVo33gJMMPFyynKLpT0rqubGLXsBbE_2MtFM86zaEeTIpnBMICFENzoCklT36rQ&_nc_oc=AQmExgygJc9WeXIducYg0UntB0WIm5oYlPuF6KR3RjhLXct8P_Z3YFGgGf1WSyUUiGA&_nc_ht=scontent.fbkk2-8.fna&oh=82a72368224e3136d223a0ab649e7623&oe=5E38D3F2',
      description: 'อุบัติเหตุ ถนนราชพฤกษ์',
      dateTime: '06-09-2019 06.07'
    },
    {
      imageUrl: 'https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/69858952_2476709132393709_5485951956130201600_n.jpg?_nc_cat=103&_nc_eui2=AeGJtCrUINeULr5S1zQhc6ilemJABQoFrYDvpICb6tIGJ5AYVo33gJMMPFyynKLpT0rqubGLXsBbE_2MtFM86zaEeTIpnBMICFENzoCklT36rQ&_nc_oc=AQmExgygJc9WeXIducYg0UntB0WIm5oYlPuF6KR3RjhLXct8P_Z3YFGgGf1WSyUUiGA&_nc_ht=scontent.fbkk2-8.fna&oh=82a72368224e3136d223a0ab649e7623&oe=5E38D3F2',
      description: 'อุบัติเหตุ ถนนบรมราชชนนี ขาเข้า',
      dateTime: '06-09-2019 06.05'
    },
    // Add more items as needed
  ];
}
