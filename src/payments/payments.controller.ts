import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PaymentSessionDto } from './dtos/payment-session.dto';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('create-payment-session')
  async createPaymentSession(@Body() paymentSessionDto: PaymentSessionDto) {
    return this.paymentsService.createPaymentSession(paymentSessionDto);
  }

  @Get('success')
  async paymentSuccess() {
    return {
      ok: true,
      message: 'Payment successful!',
    };
  }

  @Get('cancel')
  async paymentCancel() {
    return {
      ok: true,
      message: 'Payment cancelled!',
    };
  }

  @Post('webhook')
  async stripeWebhhok(@Req() req: Request, @Res() res: Response) {
    return this.paymentsService.stripeWebhook(req, res);
  }
}
