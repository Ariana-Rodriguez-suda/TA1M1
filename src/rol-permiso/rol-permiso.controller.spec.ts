import { Test, TestingModule } from '@nestjs/testing';
import { RolPermisoController } from './rol-permiso.controller';

describe('RolPermisoController', () => {
  let controller: RolPermisoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolPermisoController],
    }).compile();

    controller = module.get<RolPermisoController>(RolPermisoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
