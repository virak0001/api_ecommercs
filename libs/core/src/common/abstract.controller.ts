export abstract class AbstractController {
  public response(
    data: any,
    message: string,
    success = true,
  ): { data: any; message: string; success: boolean } {
    return { success, message, data };
  }
}
