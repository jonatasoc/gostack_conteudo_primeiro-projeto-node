import MailProviderInterface from '../models/MailProviderInterface';

interface Message {
  to: string;
  body: string;
}

export default class fakeMailProvider implements MailProviderInterface {
  private messages: Message[] = [];

  public async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({
      to,
      body,
    });
  }
}
