import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePublicacaoDto } from './dto/create-publicacao.dto';
import { UpdatePublicacaoDto } from './dto/update-publicacao.dto';
import { Publicacao } from './entities/publicacao.entity';

@Injectable()
export class PublicacaoService {
  constructor(@InjectRepository(Publicacao) private readonly repository: Repository<Publicacao>) {}

  create(publicacao: CreatePublicacaoDto): Promise<Publicacao> {
    const newPublicacao = this.repository.create(publicacao);
    return this.repository.save(newPublicacao);
  }

  findAll(): Promise<Publicacao[]> {
    return this.repository.find({loadRelationIds:true});
  }

  async findOne(isbn: any): Promise<Publicacao> {
    const publicacao = await this.repository.findOne({
      where: {isbn: isbn},
      loadRelationIds: true
    });
    return publicacao;
  }

  async update(isbn: any, publicacao: UpdatePublicacaoDto): Promise<Publicacao> {
    const updatePublicacao = await this.repository.preload({
     isbn: isbn,
      ...publicacao,
    });

    if(!updatePublicacao){
      throw new NotFoundException("Código de publicação não encontrado!");
    }

    return this.repository.save(updatePublicacao);
  }

  async remove(isbn: string) {
    const publicacao = await this.findOne(isbn);
    return this.repository.remove(publicacao);
  }
}
