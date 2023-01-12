import { UserEntity } from 'src/users/users.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({name: 'photos'})
export class PhotosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @ManyToOne(type => UserEntity, userEntity => userEntity.photos, {
        onDelete: 'CASCADE'
    })
    user: UserEntity
}