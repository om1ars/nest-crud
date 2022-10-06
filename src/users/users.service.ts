import {User} from "./entities/user.entity";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

export class UsersService {
    private users: User[] = [];
    private idSeq = 0;


    findAll(): User[] {
        return this.users;
    }

    findOne(id: number): User {
        return this.users.find((user) => user.id === id)
    }

    create(createUserDto: CreateUserDto) {
        this.users.push({
            ...createUserDto,
            id: this.idSeq++,
        })
        return this.users.at(-1)
    }

    update(id: number, updateUserDto: UpdateUserDto): User {
        const i = this.users.findIndex((user) => user.id === id);

        if (i === -1) return null;
        this.users[i] = {
            ...this.users[i],
            ...updateUserDto,
        }
        return this.users[i]
    }

    remove(id: number): User {
        const i = this.users.findIndex((user) => user.id === id);

        if (i === -1) return null;
        const user = this.users[i];
        this.users.splice(i, 1)
        return user
    }
}