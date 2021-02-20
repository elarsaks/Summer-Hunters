import { Authorized, Resolver, Query } from 'type-graphql'

import { Vault } from '../entities/vault'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'
import { Service } from 'typedi'

@Service()
@Resolver((of) => Vault)
export class VaultResolver {
  constructor(
    @InjectRepository(Vault) private readonly vaultRepository: Repository<Vault>
  ) {}

  @Query((returns) => Vault)
  publicQuery(): Promise<Vault> {
    return this.vaultRepository.findOne()
  }

  /*
  @Authorized()
  @Query((returns) => Vault)
  authedQuery(): Promise<Vault> {
    return this.vaultRepository.findOne()
  }

 
  @Query((returns) => Vault)
  vault(): Promise<Vault> {
    return this.vaultRepository.findOne()
  }
*/
}
