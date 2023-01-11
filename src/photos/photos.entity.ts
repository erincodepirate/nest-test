import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({name: 'photos'})
export class PhotosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;
}